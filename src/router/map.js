/**
 * Created by orcwa on 21.11.2016.
 */
import main from '../routes/main/index.vue'

export default [
  { path: '/', component: main },
  { path: '/test', component: { template: '<div>test <br/>well, <router-link to="/">Go back</router-link></div>' }}
]
