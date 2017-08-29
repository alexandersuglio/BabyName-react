import React, {Component} from 'react';
import './App.css';
import NamesList from './components/NamesList.js';
import Credit from './components/Credit.js';
import Search from './components/Search.js';
import ShortList from './components/shortlist.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {filterText: '',
    favorites: []
  }
  }

filterUpdate(value){
this.setState({filterText: value})

}

addFavorite(id){
  const list = this.state.favorites.concat([id])
  this.setState({ favorites: list})
}

  render() {
    // console.log("Here are the list of names", this.props.data);
   return(
<div>
<Search filterText={this.state.filterText} ruby={this.filterUpdate.bind(this)} />
<main>
<ShortList data={this.props.data} favoriteNames = {this.state.favorites} />
<NamesList data={this.props.data}
joker = {this.state.filterText} 
addFav={this.addFavorite.bind(this)} />
<Credit  />
</main>
</div>
    );
}
};

export default App;
