import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from '../../src/modules/player/_store/mutations'
import actions from '../../src/modules/player/_store/actions'

describe('play_track action test', () => {
  
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { currentTrack: null },
      mutations: mutations,
      actions: {
        playTrack: actions.playTrack
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

    store.dispatch('playTrack',newTrack)
      .then((response) => expect(store.state.currentTrack.title).ToBe('New Title') )

    store.dispatch('playTrack',newTrack)
      .then((response) => expect(store.state.currentTrack.src).toBeNull() )

  })

})