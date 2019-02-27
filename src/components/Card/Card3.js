import React from 'react'
import { CardWrapper, Area, Address, Image } from './styles'

const Card = ({item: { area, description, full_address, images, price}}) => (
  <CardWrapper main>
    <Image src={images} />
    <Address>{full_address}</Address>
    {area !== undefined ? <Area>{area} sq. fr.</Area> : null}
  </CardWrapper>
)
 
export default Card