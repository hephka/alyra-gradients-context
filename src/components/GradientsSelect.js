import React, { useContext } from "react"
import {FilterContext} from "./../context/FilterContext"
import {GradientsContext} from "./../context/GradientsContext"

const GradientsSelect = () => {
  const { filter, setFilter } = useContext(FilterContext)
  const {uniqueTags} = useContext(GradientsContext)
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {uniqueTags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
