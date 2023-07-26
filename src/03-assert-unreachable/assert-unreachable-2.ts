import {assertUnreachable} from '../util/assertUnreachable';

enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
}

enum UserRole {
  ScrumMaster = 'ScrumMaster',
  Developer = 'Developer',
  ProductOwner = 'ProductOwner',
}

interface User {
  role: UserRole;
}

export const getValidUserActions = (user: User): ActionType[] => {
  switch (user.role) {
    case UserRole.ProductOwner:
      return [ActionType.CreateStory, ActionType.TestStory, ActionType.ApproveStory];
    case UserRole.Developer:
      return [ActionType.CreateStory, ActionType.ImplementStory];
    case UserRole.ScrumMaster:
      return [ActionType.CreateStory];
    default:
      return assertUnreachable(user.role)
  }
};
