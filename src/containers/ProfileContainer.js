import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { isEmpty, propOr } from 'ramda';
import { getProfileInfo } from '../services/graphQLQuery';
import ProfileComponent from '../components/ProfileComponent';

export default compose(
  connect(state => ({ username: state.Login.username })),
  graphql(getProfileInfo, {
    name: `profile`,
    options: ({ username }) => ({
      variables: {
        username,
      },
    }),    
  }),
  branch(
    ({ profile }) => profile.loading || profile.errors || isEmpty(propOr(`user`, profile, null)),
    renderComponent(renderNothing()),
  ),
)(ProfileComponent);
