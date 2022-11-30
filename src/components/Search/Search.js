import './Search.css';
import { useEffect, useState } from 'react';
import Api from '../../utils/Api';

export default function Search({ onSearch }) {

  const [isVisible, setIsVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    setPlaceholder('Search for a place');
  },[]);

  async function onChangeHandler(text) {
    const string = text.replace(/[^A-Za-z_ ]/gi, '');

    setKeyword(string);
    setIsVisible(true);
    
    if (string.trim().length > 0) {
      setKeyword(string);
      setIsVisible(true);

      const getAutoComplete = await Api.getAutoComplete(keyword);

      if(getAutoComplete) {
        setSuggestions(getAutoComplete);
      }
    } else {
      setIsVisible(false);
    }
  };

  const onSuggestHandler = (keycode, cityName) => {
    onSearch(keycode, cityName);
    setIsVisible(false);
    setSuggestions([]);
    setKeyword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (keyword.trim().length === 0 || !keyword) {
      setIsVisible(false);
      setKeyword('');
      setPlaceholder('Search for a place');
      return;
    }

    getCityBySearch(keyword);
  };

  async function getCityBySearch(keySearch) {

    setIsVisible(false);
    setSuggestions([]);
    setKeyword('');
    
    try {
      const city = await Api.getCitySearch(keySearch);

      if(city) {
        onSearch(city[0].Key, city[0].LocalizedName);
        setPlaceholder('Search for a place');
      }
    } catch (error) {
      setPlaceholder('Place was not found');
    }
  }

  return (
    <form className='Search' onSubmit={handleSubmit}>
      <input
        type='text'
        name="keyword-search"
        className='Search__input'
        placeholder={placeholder}
        autoComplete='off'
        value={keyword || ''}
        onChange={event => onChangeHandler(event.target.value)}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
            setIsVisible(false);
          }, 100);
        }}
      />
      <button className='Search__button' type='submit'>Search</button>
      {isVisible && <div className='Search__suggestions'>
          {suggestions.length > 0 ? 
          suggestions.map((suggestion, index) => 
            <div className='Search__suggestion-item' key={index}
              onClick={() => onSuggestHandler(suggestion.Key, suggestion.LocalizedName)}>
              {suggestion.LocalizedName}
            </div>
          )
          :
            <div className='Search__suggestion-item'>No suggestions</div>
          }
        </div>
      }
    </form>
  );
}