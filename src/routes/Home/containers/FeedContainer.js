import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { getGithubActivity } from 'services/graphQLQuery';
import MainFeedComponent from 'routes/Home/components/MainFeedComponent';

export default compose(
  graphql(getGithubActivity, {
    name: 'activity',
  },
    props => {
      console.log(props.data.error)
    }),
  branch(
    ({ activity }) => activity.loading || !activity,
    renderComponent(renderNothing())
  )
)(MainFeedComponent);
