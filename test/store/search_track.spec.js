import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/search/_store/mutations'
import actions from '../../src/modules/search/_store/actions'
import { state } from '../../src/modules/search/_store'

describe('search_track action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: state,
      mutations: mutations,
      actions: {
        getTracks: actions.getTracks
      }
    })
  })

  it('mocks an ajax calling using axios', () => {

    store.dispatch('getTracks','kendrick') // query search
      .then((response) => expect(response.tracks).not.toHaveLength(0));

  })

})