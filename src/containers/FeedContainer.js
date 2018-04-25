import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { getGithubActivity } from 'services/graphQLQuery';
import MainFeedComponent from 'components/MainFeedComponent';

export default compose(
  graphql(getGithubActivity, {
    name: 'activity'
  }),
  branch(
    ({ activity }) => activity.loading || activity.errors || !activity,
    renderComponent(renderNothing())
  )
)(MainFeedComponent);
