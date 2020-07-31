import React, { useState } from "react"
import { Carousel } from "react-bootstrap"

const carousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex)

  return <Carousel activeIndex={index}></Carousel>
}

export default carousel
