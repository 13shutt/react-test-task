import React from 'react'
import numeral from 'numeral'
import { CardContainer } from './styles'

const Card = ({item: { area, description, full_address, images, price}}) => (
  <CardContainer>
    <h1>{price}</h1>
    <h3>{area}</h3>
    <p>{description}</p>
  </CardContainer>
)
 
export default Card