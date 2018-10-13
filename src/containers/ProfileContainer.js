import { compose, pure, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { isEmpty, propOr } from 'ramda';
import { getProfileInfo } from '../services/graphQLQuery';
import ProfileComponent from '../components/ProfileComponent';

export default compose(
  pure,
  graphql(getProfileInfo, {
    name: `profile`,
  }),
  branch(
    ({ profile }) => profile.loading || profile.errors || isEmpty(propOr(`user`, profile, null)),
    renderComponent(renderNothing()),
  ),
)(ProfileComponent);
