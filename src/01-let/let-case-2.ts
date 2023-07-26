const getCurrentUser = () => ({ isScumMaster: true, isDeveloper: false, isProductOwner: false });

enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
}

const validScrumMasterActions = new Set<ActionType>([
  ActionType.CreateStory,
]);

const validDeveloperActions = new Set<ActionType>([
  ActionType.CreateStory,
  ActionType.ImplementStory,
]);

const validProductOwnerActions = new Set<ActionType>([
  ActionType.TestStory,
  ActionType.ApproveStory,
]);

export const filterActionsByCurrentUser = (actionList: ActionType[], { isScumMaster, isDeveloper, isProductOwner } = getCurrentUser()): ActionType[] => {
  return [
    ...isScumMaster ? actionList.filter(a => validScrumMasterActions.has(a)) : [],
    ...isDeveloper ? actionList.filter(a => validDeveloperActions.has(a)) : [],
    ...isProductOwner ? actionList.filter(a => validProductOwnerActions.has(a)) : [],
  ];
};
