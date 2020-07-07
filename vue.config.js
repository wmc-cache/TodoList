const BASE_URL = process.env.NODE_ENV === "production" ? "/iview-admin" : "/"

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL
}