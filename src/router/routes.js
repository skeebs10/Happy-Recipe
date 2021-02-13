import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';
import CreateRecipe from '../Pages/CreateRecipe';

const routes = [
	{
		Component: Recipe,
		key: 'Recipe',
		path: '/recipe/:id'
	},
	{
		Component: CreateRecipe,
		key: 'CreateRecipe',
		path: '/create-recipe'
	}
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
];

export default routes;
