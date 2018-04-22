import { shallow } from '@vue/test-utils'
import Player from '../../src/modules/player/_components/PlayerBox.vue';

describe('Player Component', () => {
  
  const wrapper = shallow(Player, {
  	propsData: { 
	  	currentTrack: {
		    title: 'Uknown Title',
		    artist: 'Unkown Artist',
		    src: null,
		    pic: '',
		  }
	  }
  })

  it('Check vue instance...', () => {
  	expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Check Props ...', () => {
  	expect(wrapper.vm.currentTrack.title).toBe('Uknown Title')
  })
});
