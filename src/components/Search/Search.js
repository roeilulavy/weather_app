import './Search.css';
import { useEffect, useState } from 'react';

export default function Search({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    setPlaceholder('Search for a place');
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      setPlaceholder('Search for a place');
      return;
    }
    onSearch(keyword);
  };

  return (
    <form className='Search' onSubmit={handleSubmit}>
      <input
        type='text'
        name="keyword-search"
        className='Search__input'
        placeholder={placeholder}
        autoComplete='off'
        value={keyword || ''}
        onChange={(e) => setKeyword(e.target.value)}
        />
      <button className='Search__button' type='submit'>Search</button>
    </form>
  );
}