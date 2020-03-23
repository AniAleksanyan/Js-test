$(document).ready(function(){
	// 1.	Print (console.log) the "city" property from given json

	var str     = '{"name":"John", "age":31, "city":"New York"}';
	var object  = JSON.parse(str)
	
	console.log(Object.keys(object)[2])

	





	// 2.	Find property 'prop1' in given object and print the value or 'NOT FOUND' if not exists.
	// example1
	
	let obj = {
    		prop: {
        		prop1: 'Great'
    		}
		};
	// 	let obj = {
	//    			prop: {
	//         		prop2: 'Hello'
	//     	}
	// 	};
	let objKey 	= obj.prop
	let propKey = Object.keys(objKey)
	
	if (propKey == 'prop1') {
		console.log(Object.values(objKey))
	}else{
		console.log('NOT FOUND')
	}








//3.Optimize the following code
	
	let product = {price: 10, name: 'A'};
	let price;
	(product.price) ? price = product.price : price = 0
	// if(product.price) {
	// 	  price = product.price;
	// } else {
	// 	   price = 0;
	// }









//4.Calculate sum of price property from given array of objects using "reduce"

		let products = [
		    {
		        name: 'a',
		        price: 10
		    },
		    {
		        name: 'b', 
		        price: 10
		    },
		    {
		        name: 'c',
		        price: 10
		    }
		];

		const sumOfPrice = products.reduce((x, y) => ({price: x.price + y.price}));
		console.log(sumOfPrice)
})

