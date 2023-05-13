const host = process.env.VUE_APP_HOST
function getPath (path) {
  return host + path
}
export default {
  nav: getPath('/nav')
}
