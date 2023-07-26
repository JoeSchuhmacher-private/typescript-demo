import {NonEmptyArray} from './non-empty-array';

interface User {
  name: string;
  emailAddresses: string[];
}

const addMailAddressToUser = (user: User, newMailAddress: string): User => {
  const newUser = user;
  newUser.emailAddresses = [newMailAddress];
  return newUser;
}

const getFirstEMailAddress = (user: User): string => {
  return user.emailAddresses[0];
}

const createUser = (name: string, mail?: string): User => {
  return {name, emailAddresses: mail ? [mail] : []}
}
