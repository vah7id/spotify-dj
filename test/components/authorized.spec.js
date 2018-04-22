import { shallow } from '@vue/test-utils'
import Vue from 'vue'
import Authorized from '../../src/views/Authorized.vue';

describe('Authorized Component', () => {

  const wrapper = shallow(Authorized)

  it('Check vue instance...', () => {
  	expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Check data object works correct first', () => {
    wrapper.setData({ status: 'error' })
	expect(wrapper.vm.status).toBe('error')
  })

  it('Check data object works correct first', (done) => {
  	Vue.nextTick(() => {
	    wrapper.setData({ code: -1 })
		expect(wrapper.vm.status).toBe('error')
	    done()
	})
  })

  it('Check data object works correct first', (done) => {
  	Vue.nextTick(() => {
	    wrapper.setData({ code: 1 })
	    expect(wrapper.vm.status).toBe('error')
	    done()
	})
  })

  it('Check loading works ...', (done) => {
  	Vue.nextTick(() => {
		expect(wrapper.vm.fullscreenLoading).toBe(true)
		done()
	})
  })

});
