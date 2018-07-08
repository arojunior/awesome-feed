import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  branch,
  lifecycle,
  renderComponent,
  renderNothing,
} from 'recompose';
import HomeComponent from 'components/HomeComponent';
import LoginContainer from 'containers/LoginContainer';
import { setToken, setUsername } from 'modules/Login/actions';
import getToken from 'services/token';

const handleLogout = ({ dispatch }) => () => dispatch(setUsername(null));

const mapStateToProps = state => ({
  token: state.Login.token,
  username: state.Login.username,
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleLogout,
  }),
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
    },
  }),
  branch(({ username }) => !username, renderComponent(LoginContainer)),
  branch(({ token }) => !token, renderComponent(renderNothing())),
)(HomeComponent);
