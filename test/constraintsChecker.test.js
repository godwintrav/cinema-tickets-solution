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

  test("Should check if at least 1 adult ticket is purchased with Infant and Child Tickets", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("INFANT", 1);
    const ticketTypeRequest2 = new TicketTypeRequest("CHILD", 2);
    const constraintChecker = new ConstraintsChecker(
      ticketTypeRequest1,
      ticketTypeRequest2
    );
    expect(constraintChecker.checkAdultAvailable()).toBe(false);
  });

  test("Should check if number of adults is not less than number of infants", () => {
    const ticketTypeRequest1 = new TicketTypeRequest("INFANT", 3);
    const ticketTypeRequest2 = new TicketTypeRequest("ADULT", 1);
    const constraintChecker = new ConstraintsChecker(
      ticketTypeRequest1,
      ticketTypeRequest2
    );
    expect(constraintChecker.checkEqualInfantAndAdult()).toBe(false);
  });
});
