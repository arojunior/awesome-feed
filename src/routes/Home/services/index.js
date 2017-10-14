import axios from 'axios'
import { setFollowing } from 'modules/Github'

export const getFollowingUsers = ({ username, dispatch }) =>
  axios
    .get(`https://api.github.com/users/${username}/following`)
    .then(res => res.data.map(users => users.login))
    .then(following => dispatch(setFollowing(following)))
