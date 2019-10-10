import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

import ButtonBar from "./components/ButtonBar";
import Calendar from "./components/Calendar"
import Today from "./components/Today";
import TodayHD from "./components/TodayHD";
import Favorite1 from "./components/Favorite1";
import Favorite2 from "./components/Favorite2";
import Favorite3 from "./components/Favorite3";
function App() {
  const [navButton, setNavButton] = useState(["Today", "Today-HD"]);
  const [date, setDate] = useState("2018-10-20")
  const [APOD, setAPOD] = useState([]);
  const [favDay1, setFavDay1] = useState("2017-10-20")
  const [favDay2, setFavDay2] = useState("2016-10-20")
  const [favDay3, setFavDay3] = useState("2015-10-20")
  console.log("date", date)
  //Page Selector
  const [today, setToday] = useState(true);
  const [todayHD, setTodayHD] = useState(false);
  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);
  const [favorite3, setFavorite3] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=emzeOOgFr9Y7VJaF9GSzwYkhOo2HGXRYNJKCgECh&date=${date}`)
      .then(response => {
        console.log(response)
        setAPOD(response.data)
      })
      .catch(error => {
        console.log("axios response failed", error)
      })
  }, [date]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=emzeOOgFr9Y7VJaF9GSzwYkhOo2HGXRYNJKCgECh&date=${favDay1}`)
      .then(response => {
        console.log(response)
        setFavDay1(response.data)
      })
      .catch(error => {
        console.log("axios response failed", error)
      })
  }, [favDay1]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=emzeOOgFr9Y7VJaF9GSzwYkhOo2HGXRYNJKCgECh&date=${favDay2}`)
      .then(response => {
        console.log(response)
        setFavDay2(response.data)
      })
      .catch(error => {
        console.log("axios response failed", error)
      })
  }, [favDay2]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=emzeOOgFr9Y7VJaF9GSzwYkhOo2HGXRYNJKCgECh&date=${favDay3}`)
      .then(response => {
        console.log(response)
        setFavDay3(response.data)
      })
      .catch(error => {
        console.log("axios response failed", error)
      })
  }, [favDay3]);

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
  const mainButtonData = [
    {
      id: 1,
      onClick: selectToday,
      name: "Today"
    },
    {
      id: 2,
      onClick: selectTodayHD,
      name: "Today in HD"
    },
    {
      id: 3,
      onClick: selectFavorite1,
      name: "Favorite - HD 1"
    },
    {
      id: 4,
      onClick: selectFavorite2,
      name: "Favorite - HD 2"
    },
    {
      id: 5,
      onClick: selectFavorite3,
      name: "Favorite - HD 3"
    }
  ];
  // Favorite Dates onClick Functions
  const setFav1 = () => {
    setFavDay1(document.getElementById("pick-date").value)
  };
  const setFav2 = () => {
    setFavDay2(document.getElementById("pick-date").value)
  };
  const setFav3 = () => {
    setFavDay3(document.getElementById("pick-date").value)
  };
  const setFavData = [
    {
      id: 6,
      onClick: setFav1,
      name: "Set Fav - HD1"
    },
    {
      id: 7,
      onClick: setFav2,
      name: "Set Fav - HD2"
    },
    {
      id: 8,
      onClick: setFav3,
      name: "set Fav - HD3",

    }
  ];

  //Variable Display without use of routes
  const displayPage = () => {
    if (today) {
      return (
        <>
          <ButtonBar buttonData={setFavData}></ButtonBar>
          <Calendar setDate={setDate}></Calendar>
          <Today APOD={APOD}></Today>
        </>
      );
    }
    else if (todayHD) {
      return (
        <>
          <ButtonBar buttonData={setFavData}></ButtonBar>
          <Calendar setDate={setDate}></Calendar>
          <TodayHD APOD={APOD}></TodayHD>
        </>
      );
    }
    else if (favorite1) {
      return <Favorite1 favDay1={favDay1}></Favorite1>;
    }
    else if (favorite2) {
      return <Favorite2 favDay2={favDay2}></Favorite2>;
    }
    else if (favorite3) {
      return <Favorite3 favDay3={favDay3}></Favorite3>;
    }
  };

  return (
    <div className="App">
      <ButtonBar buttonData={mainButtonData}></ButtonBar>
      {displayPage()}
    </div>
  );
}

export default App;

