import {EpicId, StoryId} from './type';

export const FakeApi = {
  createStory: (title: string, description: string) => { console.log('createStory', title, description); },
  moveStory: (storyId: string, newState: 'Open' | 'InProgress' | 'Approved') => { console.log(`move story: '${storyId}' to '${newState}'`); },
  assignToEpic: (storyId: StoryId, epicId: EpicId) => { console.log(`assignToEpic: '${storyId}' to '${epicId}'`); }
}
