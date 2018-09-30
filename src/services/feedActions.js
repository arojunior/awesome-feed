import { pipe, map, flatten, sort, descend, prop, path } from 'ramda';

const mergeProfileWithActivities = ({ profile, activities }) =>
  activities.map(activity => ({
    ...profile,
    ...activity,
  }));

const mergeAllUsersActivities = ({
  login,
  name,
  avatarUrl,
  commitComments,
  issueComments,
  pullRequests,
  starredRepositories,
}) => {
  const profile = {
    login,
    name,
    avatarUrl,
  };

  return [
    mergeProfileWithActivities({ profile, activities: commitComments.nodes }),
    mergeProfileWithActivities({ profile, activities: issueComments.nodes }),
    mergeProfileWithActivities({ profile, activities: pullRequests.nodes }),
    mergeProfileWithActivities({ profile, activities: starredRepositories.nodes }),
  ];
};

const getUsersWithActivities = pipe(
  map(mergeAllUsersActivities),
  flatten,
);

const sortByLast = pipe(sort(descend(prop(`createdAt`))));

const getFollowingList = activity => path([`user`, `following`, `nodes`], activity) || [];

export default pipe(
  getFollowingList,
  getUsersWithActivities,
  sortByLast,
);
