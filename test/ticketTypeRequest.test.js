import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest.js";

describe("TicketTypeRequest Class UNHAPPY PATH TESTS", () => {
  test("Should not be able to create Invalid Ticket Type", () => {
    expect(() => {
      new TicketTypeRequest("TEENAGER", 1);
    }).toThrow(TypeError);
  });

  test("Should not be able to create Ticket with Invalid Number of Tickets", () => {
    expect(() => {
      new TicketTypeRequest("ADULT", "B");
    }).toThrow(TypeError);
  });
});

describe("TicketTypeRequest Class HAPPY PATH TESTS", () => {
  test("Should be able to get correct number of tickets", () => {
    const ticketTypeRequest = new TicketTypeRequest("ADULT", 2);
    expect(ticketTypeRequest.getNoOfTickets()).toBe(2);
  });

  test("Should be able to get the correct ticket type", () => {
    const ticketTypeRequest = new TicketTypeRequest("ADULT", 2);
    expect(ticketTypeRequest.getTicketType()).toBe("ADULT");
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
