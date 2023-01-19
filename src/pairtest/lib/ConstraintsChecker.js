import TicketTypesData from "./TicketTypesData.js";

export default class ConstraintsChecker {
  #ticketTypeRequests;
  #ticketTypesData;
  #adultType;
  #infantType;

  constructor(ticketTypeRequests) {
    this.#ticketTypeRequests = ticketTypeRequests;
    this.#ticketTypesData = new TicketTypesData();
    this.#adultType = this.#ticketTypesData.getAdultType();
    this.#infantType = this.#ticketTypesData.getInfantType();
  }

  checkMaximumTickets() {
    const maximum = 20;
    let ticketsCount = 0;
    for (let ticketTypeRequest of this.#ticketTypeRequests) {
      ticketsCount += ticketTypeRequest.getNoOfTickets();
    }
    if (ticketsCount > maximum) {
      return false;
    }

    return true;
  }

  checkAdultAvailable() {
    for (let ticketTypeRequest of this.#ticketTypeRequests) {
      const ticketType = ticketTypeRequest.getTicketType();
      const noOfTickets = ticketTypeRequest.getNoOfTickets();
      if (ticketType === this.#adultType && noOfTickets > 0) {
        return true;
      }
    }

    return false;
  }

  checkEqualInfantAndAdult() {
    let numAdults = 0;
    let numInfants = 0;
    for (let ticketTypeRequest of this.#ticketTypeRequests) {
      const ticketType = ticketTypeRequest.getTicketType();
      const noOfTickets = ticketTypeRequest.getNoOfTickets();
      if (ticketType === this.#adultType && noOfTickets > 0) {
        numAdults += noOfTickets;
      }

      if (ticketType === this.#infantType && noOfTickets > 0) {
        numInfants += noOfTickets;
      }
    }

    if (numAdults < numInfants) {
      return false;
    }

    return true;
  }
}
