import SeatReservationService from "../src/thirdparty/seatbooking/SeatReservationService";

describe("SeatReservationService Class UNHAPPY PATH TESTS", () => {
  test("Should not be able to reserve seats with Invalid AccountId", () => {
    expect(() => {
      new SeatReservationService().reserveSeat("ONE", 3);
    }).toThrow(TypeError);
  });

  test("Should not be able to reserve seats with Invalid Amount", () => {
    expect(() => {
      new SeatReservationService().reserveSeat(1, "twenty seats");
    }).toThrow(TypeError);
  });
});
