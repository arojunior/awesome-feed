import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { setUsername } from 'modules/Login';
import LoginComponent from 'components/LoginComponent';

const handleChange = ({ setGithubUsername }) => e => setGithubUsername(e.currentTarget.value);

const setGithubLogin = ({ dispatch, username }) => () => dispatch(setUsername(username));

const onKeyPress = ({ dispatch, username }) => e => {
  if (e.keyCode === 13) {
    dispatch(setUsername(username));
  }
};

export default compose(
  connect(),
  withState(`username`, `setGithubUsername`, null),
  withHandlers({
    handleChange,
    setGithubLogin,
    onKeyPress,
  }),
)(LoginComponent);
