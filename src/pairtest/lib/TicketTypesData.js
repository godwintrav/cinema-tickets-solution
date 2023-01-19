export default class TicketTypesData {
  #adultType = "ADULT";
  #childType = "CHILD";
  #infantType = "INFANT";
  #ticketTypesPrices = {
    [this.#adultType]: 20,
    [this.#childType]: 10,
    [this.#infantType]: 0,
  };
  #ticketTypesSeats = {
    [this.#adultType]: 1,
    [this.#childType]: 1,
    [this.#infantType]: 0,
  };

  getAdultType() {
    return this.#adultType;
  }

  getChildType() {
    return this.#childType;
  }

  getInfantType() {
    return this.#infantType;
  }

  getAllTypes() {
    return [this.#adultType, this.#childType, this.#infantType];
  }

  getTicketTypePrice(ticketType) {
    return this.#ticketTypesPrices[ticketType];
  }

  getTicketTypeSeat(ticketType) {
    return this.#ticketTypesSeats[ticketType];
  }
}
