import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { head } from 'ramda';
import { getGithubActivity } from '../services/graphQLQuery';
import MainFeedComponent from '../components/MainFeedComponent';
import SpinnerComponent from '../components/SpinnerComponent';
import ErrorComponent from '../components/ErrorComponent';

const isLoading = ({ activity }) => activity.loading;
const hasError = ({ activity }) => activity.error;
const hasNoData = ({ activity }) => !activity;

const nonOptimalStates = states =>
  compose(...states.map(state => branch(state.when, renderComponent(state.render))));

export default compose(
  connect(),
  graphql(getGithubActivity, {
    name: `activity`,
    options: {
      variables: {
        cursor: null,
      },
    },
    props: ({ activity }) => ({
      activity,
      loadOlderMessages: () =>
        activity.fetchMore({
          variables: {
            cursor: head(activity.user.following.edges).cursor,
          },
          updateQuery(previousResult, { fetchMoreResult }) {
            if (fetchMoreResult.user.following.nodes.length) {
              return fetchMoreResult;
            }
            return previousResult;
          },
        }),
    }),
  }),
  nonOptimalStates([
    { when: hasNoData, render: renderNothing() },
    { when: hasError, render: ErrorComponent },
    { when: isLoading, render: SpinnerComponent },
  ]),
)(MainFeedComponent);
