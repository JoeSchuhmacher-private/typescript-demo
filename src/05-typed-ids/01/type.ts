export enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
  // AssignToEpic,
}

interface CreateStoryAction {
  actionType: ActionType.CreateStory;
  title: string;
  description: string;
}

interface ImplementOrApproveStoryAction {
  actionType: ActionType.ImplementStory | ActionType.ApproveStory;
  storyId: string;
}

interface TestStoryAction {
  actionType: ActionType.TestStory;
  storyId: string;
  testResult: 'Successful' | 'Not successful';
}

// interface AssignToEpicAction {
//   actionType: ActionType.AssignToEpic;
//   storyId: string;
//   epicId: string;
// }

export type Action = CreateStoryAction | ImplementOrApproveStoryAction | TestStoryAction// | AssignToEpicAction;
