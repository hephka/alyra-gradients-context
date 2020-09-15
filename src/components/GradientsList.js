import React, {useContext} from "react"
import Gradient from "./Gradient"
import { FilterContext } from "./../context/FilterContext"
import {GradientsContext} from "./../context/GradientsContext"

const GradientsList = (props) => {
  const {filter} = useContext(FilterContext)
  const {gradients} = useContext(GradientsContext)
  const filteredList = gradients.filter( (el) => {
    if ( filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <ul className="row list-unstyled">
      {filteredList.map((el) => {
        const { name, start, end, tags } = el
        return (
          <Gradient
            key={el.name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
