import React from 'react'

const SearchBox = ({ changeSearch}) => {
  // console.log('SearchBox')
  return (
    <div className='tc pa2'>
      <input
        aria-label='Search Robots'
        onChange={changeSearch}
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'/>
    </div>
  )
}

export default SearchBox
