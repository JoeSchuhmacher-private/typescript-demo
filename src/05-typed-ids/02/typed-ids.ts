import {assertUnreachable} from '../../util/assertUnreachable';
import {Action, ActionType} from './type';
import {FakeApi} from './fake.api';


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
    case ActionType.AssignToEpic:
      FakeApi.assignToEpic(action.storyId, action.epicId);
      break;
    default:
      assertUnreachable(action);
  }
};
