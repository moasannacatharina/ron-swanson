import React from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import Image from "./components/Image";
import Title from "./components/Title";
import Quote from "./components/Quote";

const App = () => {
  // const [quote, setQuote] = React.useState([]);
  const [clickResult, setClickResult] = React.useState([]);
  const [moving, setMoving] = React.useState(false);
  const [visible, setVisible] = React.useState("");
  // const [searchText, setSearchText] = React.useState("");
  const rootUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/`;

  // React.useEffect(() => {
  //   // const rootUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchText}&limit=1&offset=0&rating=g&lang=en`;
  //   // search/${searchText}
  //   // if (!searchText) {
  //   //   return;
  //   // }
  //   fetch(rootUrl)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const random = Math.floor(Math.random() * 10);
  //       setSearchResult(json[random]);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [searchText]);

  return (
    <div className="App">
      <Title />
      <Image moving={moving} />
      <SearchField
        handleClick={() =>
          fetch(rootUrl)
            .then((response) => response.json())
            .then((json) => {
              setClickResult(json);
              setMoving(!moving);
              setVisible("visible");
            })
        }
      />
      <Quote visible={visible}>{clickResult}</Quote>
    </div>
  );
};

export default App;
