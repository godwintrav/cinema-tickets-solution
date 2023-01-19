import TicketTypesData from "./TicketTypesData.js";
/**
 * Immutable Object.
 */

export default class TicketTypeRequest {
  #type;

  #noOfTickets;

  #ticketTypesData;

  #Type;

  constructor(type, noOfTickets) {
    this.#ticketTypesData = new TicketTypesData();
    this.#Type = this.#ticketTypesData.getAllTypes();
    if (!this.#Type.includes(type)) {
      throw new TypeError(
        `type must be ${this.#Type
          .slice(0, -1)
          .join(", ")}, or ${this.#Type.slice(-1)}`
      );
    }

    if (!Number.isInteger(noOfTickets)) {
      throw new TypeError("noOfTickets must be an integer");
    }

    this.#type = type;
    this.#noOfTickets = noOfTickets;
  }

  getNoOfTickets() {
    return this.#noOfTickets;
  }

  getTicketType() {
    return this.#type;
  }

  getTicketsTotalPrice() {
    return (
      this.#noOfTickets * this.#ticketTypesData.getTicketTypePrice(this.#type)
    );
  }

  getSeats() {
    return (
      this.#noOfTickets * this.#ticketTypesData.getTicketTypeSeat(this.#type)
    );
  }
}
