import { useEffect, useState } from "react";
import { getAutoCompleted, getCitySearch } from "../../utils/Api";
import "./Search.css";

export default function Search({ onSearch }) {
  const [isVisible, setIsVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setPlaceholder("Search for a place");
  }, []);

  useEffect(() => {
    const delay = setTimeout(async () => {
      const string = keyword.replace(/[^A-Za-z_ ]/gi, "");

      if (string.trim().length > 0) {
        try {
          const getAutoComplete = await getAutoCompleted(string);

          if (getAutoComplete) {
            setIsVisible(true);
            setSuggestions(getAutoComplete);
          } else {
            setIsVisible(false);
          }
        } catch (error) {
          setIsVisible(false);
          console.log(error);
        }
      }
    }, 500);
    return () => {
      clearTimeout(delay);
    };
  }, [keyword]);

  const onSuggestHandler = (keycode, cityName) => {
    onSearch(keycode, cityName);
    setIsVisible(false);
    setSuggestions([]);
    setKeyword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim().length === 0 || !keyword) {
      setIsVisible(false);
      setKeyword("");
      setPlaceholder("Search for a place");
      return;
    }

    getCityBySearch(keyword);
  };

  async function getCityBySearch(keySearch) {
    setIsVisible(false);
    setSuggestions([]);
    setKeyword("");

    try {
      const city = await getCitySearch(keySearch);

      if (city) {
        onSearch(city[0].Key, city[0].LocalizedName);
        setPlaceholder("Search for a place");
      }
    } catch (error) {
      setPlaceholder("Place was not found");
    }
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword-search"
        className="Search__input"
        placeholder={placeholder}
        autoComplete="off"
        value={keyword || ""}
        onChange={(event) => setKeyword(event.target.value)}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
            setIsVisible(false);
          }, 100);
        }}
      />
      <button className="Search__button" type="submit">
        Search
      </button>
      {isVisible && (
        <div className="Search__suggestions">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                className="Search__suggestion-item"
                key={index}
                onClick={() =>
                  onSuggestHandler(suggestion.Key, suggestion.LocalizedName)
                }
              >
                {suggestion.LocalizedName}
              </div>
            ))
          ) : (
            <div className="Search__suggestion-item">No suggestions</div>
          )}
        </div>
      )}
    </form>
  );
}
