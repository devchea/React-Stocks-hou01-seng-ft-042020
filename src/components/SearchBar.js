import React from 'react';

const SearchBar = (props) => {
  // console.log('sb:', props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name='sort' value="Alphabetically" checked={null} onChange={props.sortByName}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name='sort' value="Price" checked={null} onChange={props.sortByPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select 
          defaultValue={'DEFAULT'}
          onChange={(e)=> props.filterStocks(e.target.value)}>
          <option value='DEFAULT' disabled >Choose a Category</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
