import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Quotes from "./pages/Quotes";
import Home from "./pages/Home";
import Gifs from "./pages/Gifs";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Quotes path="/quotes" />
        <Gifs path="/gifs" />
      </Router>
    </div>
  );
};

export default App;

// const App = () => {
//   // const [quote, setQuote] = React.useState([]);
//   const [clickResult, setClickResult] = React.useState([]);
//   const [moving, setMoving] = React.useState(false);
//   const [visible, setVisible] = React.useState("");
//   // const [searchText, setSearchText] = React.useState("");
//   const rootUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/`;

//   // React.useEffect(() => {
//   //   // const rootUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchText}&limit=1&offset=0&rating=g&lang=en`;
//   //   // search/${searchText}
//   //   // if (!searchText) {
//   //   //   return;
//   //   // }
//   //   fetch(rootUrl)
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       const random = Math.floor(Math.random() * 10);
//   //       setSearchResult(json[random]);
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //     });
//   // }, [searchText]);

//   return (
//     <div className="App">
//       <Title />
//       <Image moving={moving} />
//       <Button
//         handleClick={() =>
//           fetch(rootUrl)
//             .then((response) => response.json())
//             .then((json) => {
//               setClickResult(json);
//               setMoving(!moving);
//               setVisible("visible");
//             })
//         }
//       >
//         press here
//       </Button>
//       <Quote visible={visible}>{clickResult}</Quote>
//     </div>
//   );
// };
