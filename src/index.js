import Button from '../packages/button/index.js';

const components = [
  Button
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.use(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Button
};
