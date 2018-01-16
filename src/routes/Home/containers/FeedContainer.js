import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { getGithubActivity } from 'services/graphQLQuery';
import MainFeedComponent from 'routes/Home/components/MainFeedComponent';

export default compose(
  graphql(getGithubActivity, {
    name: 'activity',
    props: ({ activity }) => {
      console.log(activity);
      if (!activity.loading) {
        console.log(`activity`, activity.user.following);
      }
      return { activity };
    }
  }),
  branch(
    ({ activity }) => activity.loading || !activity,
    renderComponent(renderNothing())
  )
)(MainFeedComponent);
