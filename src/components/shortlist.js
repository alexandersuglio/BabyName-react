import React from 'react';

export default ({data, favoriteNames}) => {
// console.log(data);
const idList = favoriteNames.map(id => {
	const name = data[id].name;
	const sex = data[id].sex;
	console.log(name);

return(
	<li className={sex} key={id}>{name}</li>
);

})

return(
<div>
<h2> Click on a name to add to favorites </h2>

<ul className='selectedItems'> {idList} </ul>


</div>
);
}