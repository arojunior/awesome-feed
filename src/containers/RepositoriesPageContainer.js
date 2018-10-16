import { connect } from 'react-redux';
import { compose, branch, lifecycle, renderComponent } from 'recompose';
import { isEmpty } from 'ramda';
import { fetchRepositories } from '@huchenme/github-trending';
import RepositoriesPageComponent from '../components/RepositoriesPageComponent';
import SpinnerComponent from '../components/SpinnerComponent';
import { setTrendingRepos } from '../modules/Trending/actions';

const mapStateToProps = state => ({
  repos: state.Trending.repos,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, repos } = this.props;
      if (isEmpty(repos)) {
        fetchRepositories({ since: `weekly` }).then(repositories => {
          dispatch(setTrendingRepos(repositories));
        });
      }
    },
  }),
  branch(({ repos }) => isEmpty(repos), renderComponent(SpinnerComponent)),
)(RepositoriesPageComponent);
