import React from 'react'
import numeral from 'numeral'
import { CardWrapper, Area, Address, Image, Price } from './styles'

const Card = ({item: { area, description, full_address, images, price}}) => (
  <CardWrapper main>
    <Address>{full_address}</Address>
    <Image src={images} />
    <Price>{numeral(price).format('$ 0,0')}</Price>
    {area !== undefined ? <Area>{area} sq. fr.</Area> : null}
  </CardWrapper>
)
 
export default Card