import axios from 'axios'
import { flatten } from 'ramda'
import { setFollowing, setActivity } from 'modules/Github'
import { API } from '../../../constants'

export const getEventsFromFollowing = ({ following, dispatch }) => {
  const requests = following.map(user => {
    return axios.get(`${API}/users/${user}/events`)
  })

  return axios.all(requests).then(
    axios.spread((...args) => {
      const events = args.map(events => events.data)
      dispatch(setActivity(flatten(events)))
    })
  )
}

export const getFollowingUsers = ({ username, dispatch }) =>
  axios
    .get(`${API}/users/${username}/following`)
    .then(res => res.data.map(users => users.login))
    .then(following => {
      dispatch(setFollowing(following))
      getEventsFromFollowing({ following, dispatch })
    })
