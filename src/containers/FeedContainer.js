import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
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
  connect(state => ({ username: state.Login.username })),
  graphql(getGithubActivity, {
    name: `activity`,
    options: ({ username }) => ({
      variables: {
        username,
        cursor: null,
      },
    }),
    props: ({ activity }) => ({
      activity,
      loadOlderMessages: () => {
        if (!activity.getFeed.hasNextPage) return null;

        return activity.fetchMore({
          variables: {
            cursor: activity.getFeed.cursor,
          },
          updateQuery(previvousResult, { fetchMoreResult }) {
            if (fetchMoreResult.getFeed) {
              return fetchMoreResult;
            }
            return previvousResult;
          },
        })
      },
    }),
  }),
  nonOptimalStates([
    { when: hasNoData, render: renderNothing() },
    { when: hasError, render: ErrorComponent },
    { when: isLoading, render: SpinnerComponent },
  ]),
)(MainFeedComponent);
