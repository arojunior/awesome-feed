import transformDataForFeed from '../../services/feedActions';
import feed from '../fixtures/feed.json';
import feedOrganized from '../fixtures/feedOrganized.json';

describe(`services / feedActions`, () => {
  test(`Get data from Github GraphQL API and then organize as a simple list ordered by date`, () => {
    const activity = {
      ...feed.data,
    };
    expect(transformDataForFeed(activity)).toMatchObject(feedOrganized);
  });

  test(`With empty object`, () => {
    expect(transformDataForFeed({})).toEqual([]);
  });
});
