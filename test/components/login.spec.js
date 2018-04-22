import { shallow } from '@vue/test-utils'
import Login from '../../src/views/Login.vue';

describe('Login Component', () => {

  const wrapper = shallow(Login)

  it('Check vue instance...', () => {
  	expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render some spotify DJ', () => {
    expect(wrapper.html()).toContain('<h1>Spotify DJ</h1>')
  });

});
