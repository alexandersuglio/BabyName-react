import React, { Component } from 'react';

export default ({data, joker, addFav}) => {
// class NamesList extends Component{
	// render(){
		
		// const data = this.props.data;
		// const filterText =  this.props.joker;

		const namesList = data.filter(name => {
			//removenames that do not match filter textr
return name.name.toLowerCase().indexOf(joker.toLowerCase()) >= 0
}).map(data => {
		  // console.log(data.name);
		  return(
		    <li key={data.id} className={data.sex} onClick={() => addFav(data.id)}>{data.name}</li>
		    );
		})
		    return (
		      <div className="App">
		      <ul>
		         {namesList}
		      </ul>
		      </div>
		    );
	  
	// }

};

// export default NamesList;