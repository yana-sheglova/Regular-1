export default class Validator {
  constructor() {
    this.usernameReg = /^(?![0-9_-])[A-Za-z0-9_-]+(?<![0-9_-])$/;
    this.consecutiveNumbersReg = /[0-9]{4,}/;
  }

  validateUsername(username) {
    if (!this.usernameReg.test(username)) {
      return false;
    }

    if (this.consecutiveNumbersReg.test(username)) {
      return false;
    }

    return true;
  }
}
