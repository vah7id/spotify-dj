import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/login/_store/mutations'
import actions from '../../src/modules/login/_store/actions'

describe('access_token action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { token: null },
      mutations: mutations,
      actions: {
        getAccessToken: actions.getAccessToken
      }
    })
  })

  it('mocks an ajax calling using axios', () => {

  	const code = 'GENERATED_BASE64_CODE' //this code generating by spotify in each oAuth

    store.dispatch('getAccessToken',code)
      .then((response) => expect(store.state.token).toBeNull() )

    store.dispatch('getAccessToken',code)
      .then((response) => expect(response.state).toBe('error') )

    // You can test your real code to achieve access_token by uncomment bellow lines
    /*
	store.dispatch('getAccessToken',code)
      .then((response) => expect(store.state.token).not.toBeNull() )

    store.dispatch('getAccessToken',code)
      .then((response) => expect(response.state).toBe('success') )
	*/

  })

})