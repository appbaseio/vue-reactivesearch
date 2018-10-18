import ReactiveList from './components/result/ReactiveList.jsx';
import ReactiveBase from './components/ReactiveBase/index.jsx';
import DataSearch from './components/search/DataSearch.jsx';
import List from './components/list/List.jsx';
import version from './components/Version/index';

const components = [ReactiveList, ReactiveBase, DataSearch, List];

const install = function (Vue) {
  components.map((component) => {
    Vue.use(component);
    return null;
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { version, install, ReactiveList, ReactiveBase, DataSearch, List };

export default {
  version,
  install,
};
