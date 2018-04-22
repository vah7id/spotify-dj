import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/playlists/_store/mutations'
import actions from '../../src/modules/playlists/_store/actions'
import { state } from '../../src/modules/playlists/_store'

describe('switch_track action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: state,
      mutations: mutations,
      actions: {
        switchPlaylist: actions.switchPlaylist
      }
    })
  })

  it('mocks an ajax calling using axios', () => {

    store.dispatch('switchPlaylist','PLY-B')
      .then((response) => expect(store.state.activePly).ToBe('PLY-B') )

    store.dispatch('switchPlaylist','PLY-B')
      .then((response) => expect(response).ToBe('PLY-B') )

  })

})