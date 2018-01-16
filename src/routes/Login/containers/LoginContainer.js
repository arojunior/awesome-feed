import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
//import { browserHistory } from 'react-router';
import LoginComponent from '../components/LoginComponent';

import { setUser } from 'modules/Login';

const mapStateToProps = state => ({
  token: state.Login.token
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      const code = window.location.search.split(`=`)[1];
      console.log(code);
      if (code) {
        dispatch(setUser(code));
        /*.then(() => {
          browserHistory.push('/');
        });*/
      }
    }
  })
)(LoginComponent);
