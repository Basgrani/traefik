import { APP } from '../_helpers/APP'

const apiBase = '/http'

function getAllRouters (params) {
  return APP.api.get(`${apiBase}/routers?search=${params.query}&status=${params.status}&per_page=${params.limit}&page=${params.page}`)
    .then(body => {
      console.log('Success -> HttpService -> getAllRouters', body.data)
      // TODO - add the correct total from api
      return { data: body.data || [], total: 16 }
    })
}

export default {
  getAllRouters
}
