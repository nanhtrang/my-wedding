const host = process.env.VUE_APP_HOST
function getPath (path) {
  console.log(host)
  return host + path
}
export default {
  nav: getPath('/nav')
}
