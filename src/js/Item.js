import React, {Component} from 'react';
import {render} from 'react-dom';
//https://codepen.io/gabrieleromanato/pen/pIfoD

export default class Item extends Component {
	constructor(props){
		super(props)
	}

	render(){
  		const { url, caption, order } = this.props		
  		return(<div>
                <img style={{width: '100%'}} src={url} alt={caption}/>
                <div style={{position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.5)', bottom: order === 1 ? '50px' : '-50px', transition: 'bottom 1000ms ease-in'}}>{caption}</div>
  			</div>)
	}
}