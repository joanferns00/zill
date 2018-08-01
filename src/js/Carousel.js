import React, { PropTypes, Component } from 'react';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'
import Container from './Container'
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
import Item from './Item'
//https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca
//https://codepen.io/gabrieleromanato/pen/pIfoD
class Carousel extends Component {

constructor(props){
  super(props)
  this.state = {
    position: 0,
    direction: props.children.length === 2 ? 'prev' : 'next',
    sliding: false,
    firstTime: true
  }
}

handleSwipe(isNext){
 throttle((isNext) => {
  if (isNext) {
    this.nextSlide()
  } else {
    this.prevSlide()
  }
}, 500, { trailing: false })() 
}

getOrder(itemIndex) {
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length || 1
  if (itemIndex - position < 0) {
    return numItems - Math.abs(itemIndex - position)
  }
  return itemIndex - position
}

nextSlide(){
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length || 1
  this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
}

prevSlide(){
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length
  this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
}

doSliding(direction, position){
  this.setState({
    sliding: true,
    direction,
    position,
    firstTime: false
  })
  setTimeout(() => {
    this.setState({
      sliding: false
    })
  }, 50)
}

  render() {
    const { title, children } = this.props
    const { sliding, direction, position, openModal, firstTime} = this.state    
  
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{ title }</h2>
          <Swipeable
            onSwipingLeft={ () => this.handleSwipe(true) }
            onSwipingRight={ () => this.handleSwipe() }>    
          <Wrapper>
            <CarouselContainer
                sliding={ sliding }
                direction={ direction }
                firstTime={ firstTime }>
              { children.map((child, index) => (
                <CarouselSlot
                  key={ index }
                  order={ this.getOrder(index) }>
                  <Item url={child.url} caption={child.caption} order={ this.getOrder(index) }/>
                </CarouselSlot>
              )) }
            </CarouselContainer>
          </Wrapper>
        </Swipeable>            
                        
        <button onClick={() => this.prevSlide()}>&#10094;</button>              
        <button onClick={ () => this.nextSlide() }>&#10095;</button>  

        </div>
    )
  }
}
export default Carousel;