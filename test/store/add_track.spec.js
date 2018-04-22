import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/playlists/_store/mutations'
import actions from '../../src/modules/playlists/_store/actions'
import { state } from '../../src/modules/playlists/_store'

describe('add_track action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: state,
      mutations: mutations,
      actions: {
        addTrack: actions.addTrack
      }
    })
  })

  it('mocks an ajax calling using axios', () => {

    const newTrack = {
      title: 'New Title',
      artist: 'Unkown Artist',
      src: null,
      pic: '',
    }

    store.dispatch('addTrack',newTrack)
      .then((response) => expect(store.state.playlists['PLY-A'].title).ToBe('FEAR') )

    store.dispatch('addTrack',newTrack)
      .then((response) => expect(store.state.playlists['PLY-A']).toHaveLength(1) )

    store.dispatch('addTrack',newTrack)
      .then((response) => expect(store.state.playlists['PLY-B']).toHaveLength(0) )

  })

})