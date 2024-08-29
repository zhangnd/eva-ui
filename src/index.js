import Button from '../packages/button/index.js';

const components = [
  Button
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.use(component.name, component);
  });
};

export default {
  install,
  Button
};
