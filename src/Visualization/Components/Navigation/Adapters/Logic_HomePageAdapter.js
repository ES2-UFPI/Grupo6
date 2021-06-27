import Logic_VisualizationDateAdapter from '../../Main/Adapters/Logic_VisualizationDateAdapter';

const Logic_HomePageAdapter = (products) => {
	return products
		.map(Logic_VisualizationDateAdapter)
		.sort((a, b) => a.publicationDate - b.publicationDate);
};

export default Logic_HomePageAdapter;
