import { connect } from 'react-redux';
import { compose, branch, lifecycle, renderComponent } from 'recompose';
import { isEmpty } from 'ramda';
import { fetchRepositories } from '@huchenme/github-trending';
import TrendingReposComponent from 'components/TrendingReposComponent';
import SpinnerComponent from 'components/SpinnerComponent';
import { setTrendingRepos } from 'modules/Trending/actions';

const mapStateToProps = state => ({
  repos: state.Trending.repos,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      fetchRepositories({ since: `weekly` }).then(repositories => {
        dispatch(setTrendingRepos(repositories));
      });
    },
  }),
  branch(({ repos }) => isEmpty(repos), renderComponent(SpinnerComponent)),
)(TrendingReposComponent);
