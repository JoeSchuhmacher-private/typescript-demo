import {NonEmptyArray} from './non-empty-array';
import {Immutable} from './immutable.type';

interface User {
  name: string;
  emailAddresses: NonEmptyArray<string>;
}

const addMailAddressToUser = (user: Immutable<User>, newMailAddress: string): User => {
  const [first, ...other] = user.emailAddresses;
  return { name: user.name, emailAddresses: [first, ...other, newMailAddress] };
}

const getFirstEMailAddress = (user: User): string => {
  return user.emailAddresses[0];
}

const createUser = (name: string, mail: string): User => {
  return {name, emailAddresses: [mail]}
}
