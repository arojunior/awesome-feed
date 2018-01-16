import { connect } from 'react-redux';
import {
  compose,
  branch,
  mapProps,
  renderComponent,
  renderNothing
} from 'recompose';
import HomeComponent from 'routes/Home/components/HomeComponent';
import { CLIENT_ID } from '../../../constants';

const mapStateToProps = state => ({
  token: state.Login.token
});

export default compose(
  connect(mapStateToProps),
  mapProps(({ ...props }) => {
    if (!props.token) {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=awesomefeed`,
        `_self`
      );
    }
    return {
      ...props
    };
  }),
  branch(({ token }) => !token, renderComponent(renderNothing()))
)(HomeComponent);
