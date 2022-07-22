import {useState} from 'react';

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value);
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return(
    <div className='row' style={{position: 'relative'}}>
      <input type='search'
        id='search-field'
        placeholder='Search'
        onKeyDown={handleKey}
        onChange={handleChange}
        value={value}
      />
      <button className="btn" onClick={handleSubmit}
        style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >Search</button>
    </div>
  )
}

export default Search;



