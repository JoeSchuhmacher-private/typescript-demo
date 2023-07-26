enum ActionType {
  CreateStory = 'CreateStory',
  ImplementStory = 'ImplementStory',
  ApproveStory = 'ApproveStory',
  TestStory = 'TestStory',
}

interface User {
  isScumMaster: boolean;
  isDeveloper: boolean;
  isProductOwner: boolean;
}

export const getValidUserActions = (user: User): ActionType[] => {
  if (user.isDeveloper) {
    return [ActionType.CreateStory, ActionType.ImplementStory];
  }
  if (user.isScumMaster) {
    return [ActionType.CreateStory];
  }
  if (user.isProductOwner) {
    return [ActionType.CreateStory, ActionType.TestStory, ActionType.ApproveStory];
  }
};
