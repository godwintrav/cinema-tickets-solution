import TicketTypeRequest from "./lib/TicketTypeRequest.js";
import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";
import ConstraintsChecker from "./lib/ConstraintsChecker.js";
import TicketPaymentService from "../thirdparty/paymentgateway/TicketPaymentService.js";
import SeatReservationService from "../thirdparty/seatbooking/SeatReservationService.js";

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  purchaseTickets(accountId, ...ticketTypeRequests) {
    const constraintChecker = new ConstraintsChecker(...ticketTypeRequests);

    if (!Number.isInteger(accountId) || accountId < 1) {
      throw new InvalidPurchaseException("Invalid AccountId");
    }

    if (!constraintChecker.checkAdultAvailable()) {
      throw new InvalidPurchaseException(
        "Minimum of 1 Adult ticket must be purchased"
      );
    }

    if (!constraintChecker.checkEqualInfantAndAdult()) {
      throw new InvalidPurchaseException(
        "Number of Adults cannot be less than infants"
      );
    }

    if (!constraintChecker.checkMaximumTickets()) {
      throw new InvalidPurchaseException(
        "Only a maximum of 20 tickets that can be purchased at a time"
      );
    }
    const totalTicketsAmount = this.#getTotalAmount(ticketTypeRequests);
    this.#payAmount(accountId, totalTicketsAmount);

    const totalSeats = this.#getTotalSeats(ticketTypeRequests);
    this.#reserveSeats(accountId, totalSeats);

    return { seats: totalSeats, amount: totalTicketsAmount };
  }

  #payAmount(accountId, amount) {
    const ticketPaymentService = new TicketPaymentService();
    ticketPaymentService.makePayment(accountId, amount);
  }

  #reserveSeats(accountId, seats) {
    const seatReservationService = new SeatReservationService();
    seatReservationService.reserveSeat(accountId, seats);
  }

  #getTotalSeats(ticketTypeRequests) {
    let totalSeats = 0;
    ticketTypeRequests.forEach((ticketTypeRequest) => {
      totalSeats += ticketTypeRequest.getSeats();
    });

    return totalSeats;
  }

  #getTotalAmount(ticketTypeRequests) {
    let totalAmount = 0;
    ticketTypeRequests.forEach((ticketTypeRequest) => {
      const amount = ticketTypeRequest.getTicketsTotalPrice();
      totalAmount += amount;
    });

    return totalAmount;
  }
}
