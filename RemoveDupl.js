let item = ["apple", "mango", "apple", 
		"orange" ,"mango", "mango", 
		"orange","mango", "mango"]; 

function removeDuplicates(item) { 
	return item.filter((cart, 
		index) => item.indexOf(cart) === index); 
} 
console.log(removeDuplicates(item));
