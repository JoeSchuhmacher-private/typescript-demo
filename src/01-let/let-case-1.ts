const getCurrentUser = () => ({ isScumMaster: true, isDeveloper: false, isProductOwner: false });

enum ActionType {
  CreateStory = 'CreateStory',
  ImplementStory = 'ImplementStory',
  ApproveStory = 'ApproveStory',
  TestStory = 'TestStory',
}

const validScrumMasterActions = new Set<ActionType>([
  ActionType.CreateStory,
]);

const validDeveloperActions = new Set<ActionType>([
  ActionType.CreateStory,
  ActionType.ImplementStory,
]);

const validProductOwnerActions = new Set<ActionType>([
  ActionType.CreateStory,
  ActionType.TestStory,
  ActionType.ApproveStory,
]);

export const filterActionsByCurrentUser = (actionList: ActionType[]): ActionType[] => {
  let filteredTodos: ActionType[] = [];
  const { isScumMaster, isDeveloper, isProductOwner } = getCurrentUser();

  if (isScumMaster) {
    filteredTodos = actionList.filter((t) => validScrumMasterActions.has(t));
  }

  if (isDeveloper) {
    filteredTodos = actionList.filter((t) => validDeveloperActions.has(t));
  }

  if (isProductOwner) {
    filteredTodos = actionList.filter((t) => validProductOwnerActions.has(t));
  }
  return filteredTodos;
};
