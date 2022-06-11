import React, { Component } from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList'

export default class App extends Component {
  state = { images: [] }

       onSearchSubmit = async (entry) => {
      const response = await axios.get(`https://pixabay.com/api/?key=27881546-8f765909a24801e65d97b34c1&q=${entry}&image_type=photo`)
      console.log (response.data.hits);
      this.setState({images:response.data.hits})
    }
  render() {

    return (
         <div className='ui container' style={{marginTop:'2rem'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} />
    </div>
     )
   
  }
}
