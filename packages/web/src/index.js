import Vue from 'vue';
import FlockBanner from './components/Banner.vue';

const Components = {
	FlockBanner,
};
// Register components
Object.keys(Components).forEach((name) => {
	Vue.component(
		name,
		Components[
			name
		],
	);
});

export { FlockBanner };
