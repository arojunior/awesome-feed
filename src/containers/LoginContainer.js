import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { setUsername } from 'modules/Login';
import LoginComponent from 'components/LoginComponent';

const handleChange = ({ setGithubUsername }) => e =>
  setGithubUsername(e.currentTarget.value);

export default compose(
  connect(),
  withState(`username`, `setGithubUsername`, null),
  withHandlers({
    handleChange,
    setGithubLogin: ({ dispatch, username }) => () =>
      dispatch(setUsername(username))
  })
)(LoginComponent);
