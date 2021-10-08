import { mount, VueWrapper } from '@vue/test-utils';
import DsnButton from '@/components/DsnButton/DsnButton.vue';
import { ElButton } from 'element-plus';
import { ComponentPublicInstance } from 'vue';

describe('DsnButton.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;
  const global = {
    components: {
      ElButton,
    },
  };

  beforeEach(() => {
    wrapper = mount(DsnButton, {
      global,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('check props.type = primary', async () => {
    const type = 'primary';
    await wrapper.setProps({ type });
    expect(wrapper.classes('el-button--primary')).toBeTruthy();
  });
  test('check props.type not passed', async () => {
    expect(wrapper.classes('el-button--primary')).not.toBeTruthy();
  });
  test('check props.size = medium', async () => {
    const size = 'medium';
    await wrapper.setProps({ size });
    expect(wrapper.classes('el-button--medium')).toBeTruthy();
  });
  test('check props.size not passed', async () => {
    expect(wrapper.attributes('size')).not.toBeDefined();
  });

  test('check props.plain passed', async () => {
    const plain = true;
    await wrapper.setProps({ plain });
    expect(wrapper.classes('is-plain')).toBeTruthy();
  });
  test('check props.plain not passed', async () => {
    expect(wrapper.classes('is-plain')).not.toBeTruthy();
  });
  test('check props.round passed', async () => {
    const round = true;
    await wrapper.setProps({ round });
    expect(wrapper.classes('is-round')).toBeTruthy();
  });
  test('check props.round not passed', async () => {
    expect(wrapper.classes('is-round')).not.toBeTruthy();
  });
  test('check props.circle passed', async () => {
    const circle = true;
    await wrapper.setProps({ circle });
    expect(wrapper.classes('is-circle')).toBeTruthy();
  });
  test('check props.circle not passed', async () => {
    expect(wrapper.classes('is-circle')).not.toBeTruthy();
  });
  test('check props.loading passed', async () => {
    const loading = true;
    await wrapper.setProps({ loading });
    expect(wrapper.classes('is-loading')).toBeTruthy();
  });
  test('check props.loading not passed', async () => {
    expect(wrapper.classes('is-loading')).not.toBeTruthy();
  });
  test('check props.disabled passed', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });
    expect(wrapper.classes('is-disabled')).toBeTruthy();
  });
  test('check props.disabled not passed', async () => {
    expect(wrapper.classes('is-disabled')).not.toBeTruthy();
  });

  test('check emits click after clicking on component', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')?.length).toBe(1);
  });

  test('has some content inside tags (check of slot)', () => {
    const buttonText = 'check default slot';
    const slots = {
      default: buttonText,
    };
    wrapper.unmount();
    wrapper = mount(DsnButton, {
      slots,
      global,
    });

    expect(wrapper.text()).toBe(buttonText);
  });
});
