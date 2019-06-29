import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  branch,
  lifecycle,
  renderComponent,
  renderNothing
} from 'recompose';
import { withRouter } from 'react-router';
import HomeComponent from '../components/HomeComponent';
import LoginContainer from './LoginContainer';
import { setToken, setUsername } from '../modules/Login/actions';
import getToken from '../services/token';

const handleLogout = ({ dispatch }) => () => dispatch(setUsername(null));

const mapStateToProps = state => ({
  token: state.Login.token,
  username: state.Login.username
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withHandlers({
    handleLogout
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch, token } = this.props;
      if (!token) {
        getToken().then(({ data }) =>  {
          dispatch(setToken(data.token))
        });
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
