import { mount, VueWrapper, shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';

describe('BaseButton.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(BaseButton);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('check props.type = primary', async () => {
    const type = 'primary';
    await wrapper.setProps({ type });
    expect(wrapper.attributes('type')).toBe(type);
  });
  test('check props.type not passed', async () => {
    expect(wrapper.attributes('type')).not.toBeDefined();
  });
  test('check props.size = medium', async () => {
    const size = 'medium';
    await wrapper.setProps({ size });
    expect(wrapper.attributes('size')).toBe(size);
  });
  test('check props.size not passed', async () => {
    expect(wrapper.attributes('size')).not.toBeDefined();
  });

  test('check props.plain passed', async () => {
    const plain = true;
    await wrapper.setProps({ plain });
    expect(wrapper.attributes('plain')).toBe('true');
  });
  test('check props.plain not passed', async () => {
    expect(wrapper.attributes('plain')).toBe('false');
  });
  test('check props.round passed', async () => {
    const round = true;
    await wrapper.setProps({ round });
    expect(wrapper.attributes('round')).toBe('true');
  });
  test('check props.round not passed', async () => {
    expect(wrapper.attributes('round')).toBe('false');
  });
  test('check props.circle passed', async () => {
    const circle = true;
    await wrapper.setProps({ circle });
    expect(wrapper.attributes('circle')).toBe('true');
  });
  test('check props.circle not passed', async () => {
    expect(wrapper.attributes('circle')).toBe('false');
  });
  test('check props.loading passed', async () => {
    const loading = true;
    await wrapper.setProps({ loading });
    expect(wrapper.attributes('loading')).toBe('true');
  });
  test('check props.loading not passed', async () => {
    expect(wrapper.attributes('loading')).toBe('false');
  });
  test('check props.disabled passed', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });
    expect(wrapper.attributes('disabled')).toBe('true');
  });
  test('check props.disabled not passed', async () => {
    expect(wrapper.attributes('disabled')).toBe('false');
  });

  test('check emits click after clicking on component', () => {
    wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')?.length).toBe(1);
  });

  test('has some content inside tags (check of slot)', () => {
    const buttonText = 'check default slot';
    const slots = {
      default: buttonText
    };
    const wrapper = shallowMount(BaseButton, {
      slots
    });

    expect(wrapper.text()).toBe(buttonText);
  });
});
