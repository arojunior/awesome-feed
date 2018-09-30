import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { setUsername } from 'modules/Login/actions';
import LoginComponent from 'components/LoginComponent';
import { ENTER_KEY } from '../constants';

const handleChange = ({ setGithubUsername }) => e => {
  setGithubUsername(e.currentTarget.value);
};

const setGithubLogin = ({ dispatch, username }) => () => {
  dispatch(setUsername(username));
};

const onKeyPress = ({ dispatch, username }) => event => {
  if (username && event.keyCode === ENTER_KEY) {
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
  lifecycle({
    componentDidMount() {
      const { onKeyPress: keyHandler } = this.props;
      document.addEventListener(`keydown`, keyHandler);
    },
  }),
)(LoginComponent);
