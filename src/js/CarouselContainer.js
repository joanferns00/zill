import styled from 'styled-components';
/* transition: ${(props) => props.sliding ? 'none' : 'transform 5s ease'};*/
const CarouselContainer = styled.div`
  display: flex;
  margin: 0px;
  align-items: flex-start;  
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props) => {
    /*if(props.firstTime) return 'translateX(0%)'*/
    if (!props.sliding) {return 'translateX(calc(-100% - 20px))'}
    if (props.direction === 'prev') return 'translateX(calc(2 * (-100% - 20px)))'
    return 'translateX(0%)'
  }};
  `
export default CarouselContainer