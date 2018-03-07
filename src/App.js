import React, { Component } from 'react';

import './App.css';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import Recipeform from './components/RecipeForm/RecipeForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout 
      		recipeList={}
      		recipeSpotlight={}
      		editHandler={}
       		deleteHandler={} />
      </div>
    );
  }
}

export default App;
