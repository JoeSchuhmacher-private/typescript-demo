import {assertUnreachable} from '../util/assertUnreachable';

enum ActionType {
  CreateStory,
  ImplementStory,
  ApproveStory,
  TestStory,
}

interface Action {
  actionType: ActionType;
  storyId?: string;
  title?: string;
  description?: string;
  testResult?: 'Successful' | 'Not successful';
}

export const handleBoardAction = (action: Action): void => {
  switch (action.actionType) {
    case ActionType.ApproveStory:
      break;
    case ActionType.CreateStory:
      break;
    case ActionType.ImplementStory:
      break;
    case ActionType.TestStory:
      break;
    default:
      assertUnreachable(action.actionType);
  }
};

const FakeApi = {
  createStory: (title: string, description: string) => { console.log('createStory', title, description); },
  moveStory: (storyId: string, newState: 'Open' | 'InProgress' | 'Approved') => { console.log(`move story: '${storyId}' to '${newState}'`); }
}
