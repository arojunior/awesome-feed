import base64 from 'base-64'

export const API = 'https://api.github.com'
export const GITHUB = 'https://github.com'
export const GITHUB_GRAPHQL = 'https://api.github.com/graphql'
export const USERNAME = 'arojunior'
export const PASSWORD = '477549d1ce359fcbd6b4186f15793ea3b68e78f3'
export const TOKEN = base64.encode(USERNAME.trim() + ':' + PASSWORD.trim())
