import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/playlists/_store/mutations'
import actions from '../../src/modules/playlists/_store/actions'
import { state } from '../../src/modules/playlists/_store'

describe('remove_track action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: state,
      mutations: mutations,
      actions: {
        removeTrack: actions.removeTrack,
        addTrack: actions.addTrack
      }
    })
  })

  it('mocks an ajax calling using axios', () => {

    const ADD_TRACK = {
      title: 'New Title',
      artist: 'Unkown Artist',
      src: null,
      pic: '',
    }


    store.dispatch('addTrack',ADD_TRACK)
      .then((response) => {

        store.dispatch('removeTrack',ADD_TRACK)
          .then((response) => expect(store.state.playlists['PLY-A']).toHaveLength(0))

      })

  })

})