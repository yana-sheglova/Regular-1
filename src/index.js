import Validator from './js/validator';

const validator = new Validator();
const username1 = 'valid1234username';
const username2 = 'valid123';

console.log(validator.validateUsername(username1));
console.log(validator.validateUsername(username2));
