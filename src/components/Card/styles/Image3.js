import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import numeral from 'numeral'

import { Price } from '../styles'

const Img = styled.div`
  width: 300px;
  height: 168px;
  overflow: hidden;
  background-color: white;
`

const StyledDiv = styled.div`
  width: 300px;
`

const Image = ( src ) => (
  <StyledDiv>
    <Carousel showThumbs={false} showStatus={false} >
      {src.src.map(item => (
        <Img>
          <Price>{numeral(item.price).format('$ 0,0')}</Price>
          <img src={item} />
        </Img>
      ))}
    </Carousel>
  </StyledDiv>
)

export default Image