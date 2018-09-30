import { connect } from 'react-redux';
import axios from 'axios';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { setUsername } from 'modules/Login/actions';
import LoginComponent from 'components/LoginComponent';
import { ENTER_KEY, API } from '../constants';

const handleChange = ({ setGithubUsername }) => e => {
  setGithubUsername(e.currentTarget.value);
};

const setGithubLogin = ({ dispatch, username, setLoginRequest }) => () => {
  setLoginRequest(`Loading...`);
  return axios
    .get(`${API}/users/${username}`)
    .then(() => {
      dispatch(setUsername(username));
      setLoginRequest(``);
    })
    .catch(() => {
      setLoginRequest(`User ${username} not found`);
    });
};

const onKeyPress = ({ dispatch, username }) => event => {
  if (username && event.keyCode === ENTER_KEY) {
    dispatch(setUsername(username));
  }
};

export default compose(
  connect(),
  withState(`username`, `setGithubUsername`, null),
  withState(`loginRequest`, `setLoginRequest`, ``),
  withHandlers({
    handleChange,
    setGithubLogin,
    onKeyPress,
  }),
  lifecycle({
    componentDidMount() {
      const { onKeyPress: keyHandler } = this.props;
      document.addEventListener(`keydown`, keyHandler);
    },
  }),
)(LoginComponent);
