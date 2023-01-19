import TicketTypesData from "../src/pairtest/lib/TicketTypesData";

let ticketTypeData;
let adultType;
let adultTicketTypePrice;
let adultTicketTypeSeat;
let childType;
let childTicketTypePrice;
let childTicketTypeSeat;
let infantType;
let infantTicketTypePrice;
let infantTicketTypeSeat;
let allTypes;
beforeAll(() => {
  ticketTypeData = new TicketTypesData();
  adultType = "ADULT";
  adultTicketTypePrice = 20;
  adultTicketTypeSeat = 1;
  childType = "CHILD";
  childTicketTypePrice = 10;
  childTicketTypeSeat = 1;
  infantType = "INFANT";
  infantTicketTypePrice = 0;
  infantTicketTypeSeat = 0;
  allTypes = [adultType, childType, infantType];
});

describe("TicketTypeRequest Class HAPPY PATH TESTS", () => {
  test("Should be able to get correct ADULT Ticket Type Data", () => {
    expect(ticketTypeData.getAdultType()).toBe(adultType);
    expect(ticketTypeData.getTicketTypePrice(adultType)).toBe(
      adultTicketTypePrice
    );
    expect(ticketTypeData.getTicketTypeSeat(adultType)).toBe(
      adultTicketTypeSeat
    );
  });

  test("Should be able to get correct CHILD Ticket Type Data", () => {
    expect(ticketTypeData.getChildType()).toBe(childType);
    expect(ticketTypeData.getTicketTypePrice(childType)).toBe(
      childTicketTypePrice
    );
    expect(ticketTypeData.getTicketTypeSeat(childType)).toBe(
      childTicketTypeSeat
    );
  });

  test("Should be able to get correct INFANT Ticket Type Data", () => {
    expect(ticketTypeData.getInfantType()).toBe(infantType);
    expect(ticketTypeData.getTicketTypePrice(infantType)).toBe(
      infantTicketTypePrice
    );
    expect(ticketTypeData.getTicketTypeSeat(infantType)).toBe(
      infantTicketTypeSeat
    );
  });

  test("Should be able to get all Ticket Types Data", () => {
    expect(ticketTypeData.getAllTypes()).toStrictEqual(allTypes);
  });
});
