import { flatten, sort, descend, prop, propOr } from 'ramda';

const mergeAllUsersActivities = ({ profile, activities }) =>
  flatten([
    activities.commitComments.nodes.map(data => ({
      ...profile,
      ...data,
    })),
    activities.issueComments.nodes.map(data => ({
      ...profile,
      ...data,
    })),
    activities.pullRequests.nodes.map(data => ({
      ...profile,
      ...data,
    })),
    activities.starredRepositories.nodes.map(data => ({
      ...profile,
      ...data,
    })),
  ]);

const usersWithActivities = users => {
  const activitiesByUser = users.map(data => {
    const profile = {
      login: data.login,
      name: data.name,
      avatarUrl: data.avatarUrl,
    };
    return flatten(mergeAllUsersActivities({ profile, activities: data }));
  });
  return activitiesByUser.reduce((prev, curr) => prev.concat(curr), []);
};

const sortedByLast = activity => sort(descend(prop(`createdAt`)))(activity);

export const transformDataForFeed = activity =>
  propOr(`user.following`, activity, undefined) &&
  sortedByLast(usersWithActivities(activity.user.following.nodes));
