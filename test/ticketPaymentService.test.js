import TicketPaymentService from "../src/thirdparty/paymentgateway/TicketPaymentService";

describe("TicketPaymentService Class UNHAPPY PATH TESTS", () => {
  test("Should not be able to make payment with Invalid AccountId", () => {
    expect(() => {
      new TicketPaymentService().makePayment("B", 20);
    }).toThrow(TypeError);
  });

  test("Should not be able to make payment with Invalid Amount", () => {
    expect(() => {
      new TicketPaymentService().makePayment(1, "three");
    }).toThrow(TypeError);
  });
});
