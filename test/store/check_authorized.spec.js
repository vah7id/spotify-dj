import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/login/_store/mutations'
import actions from '../../src/modules/login/_store/actions'

describe('check_authorized action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { authorized: false },
      mutations: mutations,
      actions: {
        checkAuthorized: actions.checkAuthorized
      }
    })
    localStorage.setItem('spotify_token','TOKEN_GENERATED_CODE') // replace your real token to test
  })

  it('mocks an ajax calling using axios', () => {

    store.dispatch('checkAuthorized')
      .then((response) => expect(store.state.authorized).toBeFalsy() )

    store.dispatch('checkAuthorized')
      .then((response) => expect(response.status).toBe('error') )

    // You can test your real token to achieve check_authorized status true by uncomment bellow lines
    /*
	    store.dispatch('checkAuthorized')
      .then((response) => expect(store.state.authorized).toBeTruthy() )

      store.dispatch('checkAuthorized')
      .then((response) => expect(response.status).toBe('success') )
	   */

  })

})