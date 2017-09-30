import axios from 'axios'
import {createAction} from 'redux-actions'

export const GITHUB_FETCHING = 'modules/Github/FETCHING'
export const GITHUB_SUCCESS  = 'modules/Github/SUCCESS'
export const GITHUB_ERROR    = 'modules/Github/ERROR'

const githubFetching = createAction(GITHUB_FETCHING)
const githubError    = createAction(GITHUB_ERROR)
const githubSuccess  = createAction(GITHUB_SUCCESS)

export const getUserFromGithub = username => ({
    type : [
        githubFetching,
        githubSuccess,
        githubError
    ],
    payload : {
        data : () => axios.get('https://api.github.com/users/' + username)
    }
})
