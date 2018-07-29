import React from 'react';

const SearchBox = ({searchInput}) =>{
  return(
    <div>
      <input 
      type='search'
      palceholder='Enter beer name'
      onChange={searchInput}
      />
    </div>
    )
}

export default SearchBox;