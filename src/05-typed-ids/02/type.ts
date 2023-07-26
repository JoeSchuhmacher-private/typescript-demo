export enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
  AssignToEpic,
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

export type StoryId = String & {
  _storyId: never;
}

export type EpicId = String & {
  _epicId: never;
}

interface AssignToEpicAction {
  actionType: ActionType.AssignToEpic;
  storyId: StoryId;
  epicId: EpicId;
}

export type Action = CreateStoryAction | ImplementOrApproveStoryAction | TestStoryAction | AssignToEpicAction;
