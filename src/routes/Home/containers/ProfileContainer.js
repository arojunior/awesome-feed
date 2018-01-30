import { compose, branch, renderComponent, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { getProfileInfo } from 'services/graphQLQuery';
import ProfileComponent from 'routes/Home/components/ProfileComponent'

export default compose(
  graphql(getProfileInfo, {
    name: 'profile',
  }),
  branch(
    ({ profile }) => profile.loading || !profile,
    renderComponent(renderNothing())
  )
)(ProfileComponent)
