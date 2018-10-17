import ReactiveList from './components/result/ReactiveList.jsx';
import ReactiveBase from './components/ReactiveBase/index.jsx';
import version from './components/Version/index';

const components = [ReactiveList, ReactiveBase];

const install = function (Vue) {
  components.map((component) => {
    Vue.use(component);
    return null;
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
 version, install, ReactiveList, ReactiveBase,
};

export default {
  version,
  install,
};
