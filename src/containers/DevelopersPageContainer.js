import { connect } from 'react-redux';
import { compose, branch, lifecycle, renderComponent } from 'recompose';
import { isEmpty } from 'ramda';
import { fetchDevelopers } from '@huchenme/github-trending';
import DevelopersPageComponent from '../components/DevelopersPageComponent';
import SpinnerComponent from '../components/SpinnerComponent';
import { setTrendingUsers } from '../modules/Trending/actions';

const mapStateToProps = state => ({
  users: state.Trending.users,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, users } = this.props;
      if (isEmpty(users)) {
        fetchDevelopers({ since: `weekly` }).then(developers => {
          dispatch(setTrendingUsers(developers));
        });
      }
    },
  }),
  branch(({ users }) => isEmpty(users), renderComponent(SpinnerComponent)),
)(DevelopersPageComponent);
