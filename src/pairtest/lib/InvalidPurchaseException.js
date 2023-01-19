export default class InvalidPurchaseException extends Error {
  constructor(message) {
    // Call the parent constructor
    super(message);
    this.message = message;

    this.name = "InvalidPurchaseException";
  }
}
