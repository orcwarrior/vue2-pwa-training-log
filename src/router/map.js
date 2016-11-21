/**
 * Created by orcwa on 21.11.2016.
 */
import Main from '../routes/main/index.vue'

const Test = (resolve) => {
  require.ensure(['../routes/test/index.vue'], () => {
    resolve(require('../routes/test/index.vue'))
  }, 'test-route')
}
export default [
  {path: '/', component: Main},
  {path: '/test', component: Test}
]
