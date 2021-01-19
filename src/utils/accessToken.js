export function getAccessToken() {
  return localStorage.getItem('cmsId')
}

export function setAccessToken(accessToken) {
  return localStorage.setItem('cmsId', accessToken)
}

export function removeAccessToken() {
  return localStorage.removeItem('cmsId')
}