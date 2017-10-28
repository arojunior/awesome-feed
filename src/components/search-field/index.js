import React from 'react'
import PropTypes from 'prop-types'

import './search-field.css'

const SearchField = ({ name, label }) => (
  <div className='search-container'>
    <label htmlFor={name}>{label}</label>
    <input name={name} />
  </div>
)

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default SearchField