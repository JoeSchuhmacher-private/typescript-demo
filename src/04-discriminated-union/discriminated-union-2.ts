import {assertUnreachable} from '../util/assertUnreachable';

enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
}

interface CreateStoryAction {
  actionType: ActionType.CreateStory;
  title: string;
  description: string;
}

interface ImplementOrApproveStoryAction {
  storyId: string;
  actionType: ActionType.ImplementStory | ActionType.ApproveStory;
}

interface TestStoryAction {
  storyId: string;
  actionType: ActionType.TestStory;
  testResult: 'Successful' | 'Not successful';
}

type Action = CreateStoryAction | ImplementOrApproveStoryAction | TestStoryAction;


export const handleBoardAction = (action: Action): void => {
  switch (action.actionType) {
    case ActionType.ApproveStory:
      FakeApi.moveStory(action.storyId, 'Approved');
      break;
    case ActionType.CreateStory:
      FakeApi.createStory(action.title, action.description);
      break;
    case ActionType.ImplementStory:
      FakeApi.moveStory(action.storyId, 'InProgress');
      break;
    case ActionType.TestStory:
      FakeApi.moveStory(action.storyId, action.testResult === 'Successful' ? 'Approved' : 'Open');
      break;
    default:
      assertUnreachable(action);
  }
};

const FakeApi = {
  createStory: (title: string, description: string) => { console.log('createStory', title, description); },
  moveStory: (storyId: string, newState: 'Open' | 'InProgress' | 'Approved') => { console.log(`move story: '${storyId}' to '${newState}'`); }
}
