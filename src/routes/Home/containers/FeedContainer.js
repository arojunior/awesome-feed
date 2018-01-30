import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { getGithubActivity } from 'services/graphQLQuery';
import MainFeedComponent from 'routes/Home/components/MainFeedComponent';

export default compose(
  graphql(getGithubActivity, {
    name: 'activity',
  }),
  branch(
    ({ activity }) => activity.loading || !activity || activity.user.following.nodes.length === 0,
    renderComponent(renderNothing())
  )
)(MainFeedComponent);
