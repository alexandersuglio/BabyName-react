import React, {Component} from 'react';

class Search extends Component {

filterUpdate() {
	const val = this.myValue.value;
	this.props.ruby(val);

}

render() {
console.log(this.props.filterText);
return(
<header>
<form>
<input
type="text"
ref={ (value) => {this.myValue = value} }
placeholder="Type a name"
onChange={this.filterUpdate.bind(this)}
/>
</form>
</header>



	);
}

};

export default Search;