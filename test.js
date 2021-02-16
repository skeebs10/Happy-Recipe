// const { default: axios } = require('axios');

// axios
// 	.get('http://www.recipepuppy.com/api/')
// 	.then(res => {
// 		// console.log('res', res.data);

// 		let aa = res.data.results.map(item => ({
// 			title: item.title,
// 			description: item.title,
// 			image_url: item.thumbnail
// 				? item.thumbnail
// 				: 'https://assets.bonappetit.com/photos/5aa9665c275dc52331d9184b/5:7/w_2445,h_3423,c_limit/pantry-pasta.jpg',
// 			ingredients: item.ingredients.split(','),
// 			publisher: 'Natalia'
// 		}));
// 		console.log('aa', aa);
// 		aa.map(async item => {
// 			await axios
// 				.post('http://localhost:8000/api', item)
// 				.then(res => {
// 					console.log('success');
// 				})
// 				.catch(err => {
// 					console.log('err', err);
// 				});
// 		});
// 	})
// 	.catch(err => {
// 		console.log('err', err);
// 	});
