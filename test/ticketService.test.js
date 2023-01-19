import TicketService from "../src/pairtest/TicketService.js";
import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest.js";
import InvalidPurchaseException from "../src/pairtest/lib/InvalidPurchaseException.js";

describe("TicketService UNHAPPY PATH TESTS", () => {
  test("Should not be able to pass accountId that's not a number", () => {
    const ticketTypeRequest = new TicketTypeRequest("ADULT", 1);
    expect(() => {
      new TicketService().purchaseTickets("id", ticketTypeRequest);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to pass accountId less than 1", () => {
    const ticketTypeRequest = new TicketTypeRequest("ADULT", 1);
    expect(() => {
      new TicketService().purchaseTickets(0, ticketTypeRequest);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase infant ticket without adult", () => {
    const ticketTypeRequest = new TicketTypeRequest("INFANT", 1);
    expect(() => {
      new TicketService().purchaseTickets(2, ticketTypeRequest);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase child ticket without adult", () => {
    const ticketTypeRequest = new TicketTypeRequest("CHILD", 1);
    expect(() => {
      new TicketService().purchaseTickets(2, ticketTypeRequest);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase both child and infant ticket without adult", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("CHILD", 1);
    const ticketTypeRequest2 = new TicketTypeRequest("INFANT", 1);
    expect(() => {
      new TicketService().purchaseTickets(
        2,
        ticketTypeRequest1,
        ticketTypeRequest2
      );
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase 0 tickets", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("CHILD", 0);
    const ticketTypeRequest2 = new TicketTypeRequest("INFANT", 0);
    const ticketTypeRequest3 = new TicketTypeRequest("ADULT", 0);
    expect(() => {
      new TicketService().purchaseTickets(
        2,
        ticketTypeRequest1,
        ticketTypeRequest2,
        ticketTypeRequest3
      );
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to pass negative number of tickets value like -1", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", -2);
    expect(() => {
      new TicketService().purchaseTickets(2, ticketTypeRequest1);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase more than 20 tickets", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 22);
    expect(() => {
      new TicketService().purchaseTickets(2, ticketTypeRequest1);
    }).toThrow(InvalidPurchaseException);
  });

  test("Should not be able to purchase more Infant tickets than Adult ticket", () => {
    //since an infant seats on an adults lap there cant be more infants tickets than there is adult tickets
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 2);
    const ticketTypeRequest2 = new TicketTypeRequest("INFANT", 4);
    expect(() => {
      new TicketService().purchaseTickets(
        2,
        ticketTypeRequest1,
        ticketTypeRequest2
      );
    }).toThrow(InvalidPurchaseException);
  });
});

describe("TicketService Class HAPPY PATH TESTS", () => {
  test("Should be able to purchase maximum 20 tickets", () => {
    const ticketTypeRequest = new TicketTypeRequest("ADULT", 20);
    const { seats, amount } = new TicketService().purchaseTickets(
      2,
      ticketTypeRequest
    );
    expect(seats).toBe(20);
    expect(amount).toBe(400);
  });

  test("Should be able to purchase multiple tickets at a time and calculate the correct number of seats", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 2);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 2);
    const ticketTypeRequest3 = new TicketTypeRequest("INFANT", 1);
    const { seats, amount } = new TicketService().purchaseTickets(
      2,
      ticketTypeRequest1,
      ticketTypeRequest2,
      ticketTypeRequest3
    );
    expect(seats).toBe(4);
    expect(amount).toBe(60);
  });
});
