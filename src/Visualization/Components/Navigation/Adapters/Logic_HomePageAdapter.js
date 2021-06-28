import Logic_VisualizationDateAdapter from '../../Main/Adapters/Logic_VisualizationDateAdapter';

const Logic_HomePageAdapter = (products) => {
	return products
		.map(Logic_VisualizationDateAdapter)
		.sort((a, b) => b.publicationDate - a.publicationDate);
};

export default Logic_HomePageAdapter;
