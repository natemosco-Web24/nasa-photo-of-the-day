import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

import ButtonBar from "./components/ButtonBar";
import Today from "./components/Today";
import TodayHD from "./components/TodayHD";
import Favorite1 from "./components/Favorite1";
import Favorite2 from "./components/Favorite2";
import Favorite3 from "./components/Favorite3";
function App() {
  const [navButton, setNavButton] = useState(["Today", "Today-HD"]);
  const [APOD, setAPOD] = useState([]);

  //Page Selector
  const [today, setToday] = useState(true);
  const [todayHD, setTodayHD] = useState(false);
  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);
  const [favorite3, setFavorite3] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-01-01`)
      .then(response => {
        console.log(response)
        setAPOD(response.data)
      })
      .catch(error => {
        console.log("axios response failed", error)
      })
  }, []);

  //Page Selector onClick functions
  const selectToday = () => {
    setToday(true)
    setTodayHD(false)
    setFavorite1(false)
    setFavorite2(false)
    setFavorite3(false)
  };
  const selectTodayHD = () => {
    setToday(false)
    setTodayHD(true)
    setFavorite1(false)
    setFavorite2(false)
    setFavorite3(false)
  };
  const selectFavorite1 = () => {
    setToday(false)
    setTodayHD(false)
    setFavorite1(true)
    setFavorite2(false)
    setFavorite3(false)
  };
  const selectFavorite2 = () => {
    setToday(false)
    setTodayHD(false)
    setFavorite1(false)
    setFavorite2(true)
    setFavorite3(false)
  };
  const selectFavorite3 = () => {
    setToday(false)
    setTodayHD(false)
    setFavorite1(false)
    setFavorite2(false)
    setFavorite3(true)
  };
  const displayPage = () => {
    if (today) {
      return <Today APOD={APOD}></Today>
    }
    else if (todayHD) {
      return <TodayHD APOD={APOD}></TodayHD>
    }
    else if (favorite1) {
      return <Favorite1></Favorite1>
    }
    else if (favorite2) {
      return <Favorite2></Favorite2>
    }
    else if (favorite3) {
      return <Favorite3></Favorite3>
    }
  };
  const buttonData = [
    {
      id: 1,
      onClick: selectToday,
      name: "Today"
    },
    {
      id: 2,
      onClick: selectTodayHD,
      name: "Today-HD"
    },
    {
      id: 3,
      onClick: selectFavorite1,
      name: "Favorite - 1"
    },
    {
      id: 4,
      onClick: selectFavorite2,
      name: "Favorite - 2"
    },
    {
      id: 5,
      onClick: selectFavorite3,
      name: "Favorite - 3"
    }
  ]

  return (
    <div className="App">
      <ButtonBar buttonData={buttonData}></ButtonBar>
      {/* <Calendar></Calendar> */}
      {displayPage()}
    </div>
  );
}

export default App;

