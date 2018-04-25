import { connect } from 'react-redux';
import {
  compose,
  branch,
  lifecycle,
  renderComponent,
  renderNothing
} from 'recompose';
import HomeComponent from 'components/HomeComponent';
import LoginContainer from 'containers/LoginContainer';
import { setToken } from 'modules/Login';
import getToken from 'services/token';

const mapStateToProps = state => ({
  token: state.Login.token,
  username: state.Login.username
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, token } = this.props;
      if (!token) {
        getToken().then(data => dispatch(setToken(data)));
      }
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.username) {
        window.location.reload();
      }
    }
  }),
  branch(({ username }) => !username, renderComponent(LoginContainer)),
  branch(({ token }) => !token, renderComponent(renderNothing()))
)(HomeComponent);
