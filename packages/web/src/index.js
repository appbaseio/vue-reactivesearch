import ReactiveList from './components/result/ReactiveList.jsx';
import ReactiveBase from './components/ReactiveBase/index.jsx';
import DataSearch from './components/search/DataSearch.jsx';
import SingleList from './components/list/SingleList.jsx';
import MultiList from './components/list/MultiList.jsx';
import SingleRange from './components/range/SingleRange.jsx';
import version from './components/Version/index';

const components = [ReactiveList, ReactiveBase, DataSearch, SingleList, MultiList, SingleRange];

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
  version,
  install,
  ReactiveList,
  ReactiveBase,
  DataSearch,
  SingleList,
  MultiList,
  SingleRange,
};

export default {
  version,
  install,
};
