import ConstraintsChecker from "../src/pairtest/lib/ConstraintsChecker";
import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest";

describe("ConstraintsChecker Class HAPPY PATH TESTS", () => {
  test("Should return false when more than maximum number of tickets is in request", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 19);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 2);
    const constraintChecker = new ConstraintsChecker(
      ticketTypeRequest1,
      ticketTypeRequest2
    );
    expect(constraintChecker.checkMaximumTickets()).toBe(false);
  });

  test("Should be check if at least 1 adult ticket is purchased with Infant and Child Tickets", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("INFANT", 1);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 2);
    const constraintChecker = new ConstraintsChecker(
      ticketTypeRequest1,
      ticketTypeRequest2
    );
    expect(constraintChecker.checkAdultAvailable()).toBe(false);
  });

  test("Should be able to get the correct ticket price for the ticket type", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 2);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 1);
    const ticketTypeRequest3 = new TicketTypeRequest("INFANT", 2);
    expect(ticketTypeRequest1.getTicketsTotalPrice()).toBe(40);
    expect(ticketTypeRequest2.getTicketsTotalPrice()).toBe(10);
    expect(ticketTypeRequest3.getTicketsTotalPrice()).toBe(0);
  });

  test("Should be able to get the correct ticket seats for the ticket type", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("ADULT", 2);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 1);
    const ticketTypeRequest3 = new TicketTypeRequest("INFANT", 2);
    expect(ticketTypeRequest1.getSeats()).toBe(2);
    expect(ticketTypeRequest2.getSeats()).toBe(1);
    expect(ticketTypeRequest3.getSeats()).toBe(0);
  });
});
