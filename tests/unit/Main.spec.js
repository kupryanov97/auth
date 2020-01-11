import Vue from 'vue';
import Main from '@/components/Main.vue';
function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}
describe('Main.vue', () => {
  it('корректный цвет', () => {
    const headingData = mountComponentWithProps(Main, { color: 'red' });
    const styleData = headingData.style.getPropertyValue('color');
    console.log(styleData)
    expect(styleData).toEqual('red');
  });
it('корректный текст', () => {
    const headingData = mountComponentWithProps(Main, { title:'Success!!' });
    const titleData = headingData.textContent;
    expect(titleData).toEqual('Success!!');
  });
  });