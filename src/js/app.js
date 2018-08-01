import React, {Component} from 'react';
import {render} from 'react-dom';
import Carousel from './Carousel'

const imageArray = [
{  url     : 'https://www.w3schools.com/css/img_5terre.jpg',
   caption : 'Caption 1'},
{  url     : 'https://www.w3schools.com/css/img_forest.jpg',
   caption : 'Caption 2'},   
{  url     : 'https://www.w3schools.com/css/img_lights.jpg',
   caption : 'Caption 3'},
{  url     : 'https://www.w3schools.com/css/img_mountains.jpg',
   caption : 'Caption 4'},
{  url     : 'https://images.pexels.com/photos/1280730/pexels-photo-1280730.jpeg',
   caption : 'Caption 5'},   
{  url     : 'https://www.w3schools.com/css/img_mountains.jpg',
   caption : 'Caption 6'},   
]

export default class MyGallery extends Component{
  render(){
    return (
		<Carousel title={"My gallery"} children={imageArray}/>
      )
  }
}

render(<MyGallery/>, document.getElementById('app'));