import { connect } from 'react-redux';
import { compose, pure, branch, lifecycle, renderComponent } from 'recompose';
import { isEmpty } from 'ramda';
import { fetchDevelopers } from '@huchenme/github-trending';
import TrendingUsersComponent from '../components/TrendingUsersComponent';
import SpinnerComponent from '../components/SpinnerComponent';
import { setTrendingUsers } from '../modules/Trending/actions';

const mapStateToProps = state => ({
  users: state.Trending.users,
});

export default compose(
  pure,
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      fetchDevelopers({ since: `weekly` }).then(developers => {
        dispatch(setTrendingUsers(developers));
      });
    },
  }),
  branch(({ users }) => isEmpty(users), renderComponent(SpinnerComponent)),
)(TrendingUsersComponent);
