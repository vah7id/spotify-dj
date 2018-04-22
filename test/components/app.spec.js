import { mount } from '@vue/test-utils'
import App from '../../src/App.vue';

describe('App Main Component', () => {
  
  const wrapper = mount(App)
  
  it('should render main div', () => {
    const div = wrapper.find('div')
	expect(div.attributes().id).toBe('app')
  });

  it('Check vue instance...', () => {
  	expect(wrapper.isVueInstance()).toBe(true)
  })

});
