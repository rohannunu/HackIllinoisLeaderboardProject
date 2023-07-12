/*Tutorials and Documentation Used:
1) https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/ 
  Specific Hook Documentation:
    1) useState Hook: https://react.dev/reference/react/useState
      a) Summary: useState allows us to  
    2) useEffect Hook: 


    2) Helped me dynamically number the list: https://stackoverflow.com/questions/62840731/add-numbers-to-list-item-react-native
*/

import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react" //Using the useEffect and useState Hook


function App() {

  const [users, setUsers] = useState([])
  

  const fetchUserData = () => {
    fetch(`https://api.hackillinois.org/profile/leaderboard/`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data.profiles)
    })
    console.log(users)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  

  return (
    <>
    <body id="gradient">
    <h1> HackIllinois Leaderboard </h1>
      {(
        <div id="largeContainer">

          <div id="containerTop3">
            {users.slice(0, 3).map((user, index) => (
            <div class="card" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title">{index + 1}: {user.discord}</h5>
              <p class="card-text">Points: {user.points}</p>
            </div>
          </div>
          ))}</div>

          <div id="containerRemaining">
            {users.slice(3).map((user, index) => (
            <div class="card" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title">{index + 4}: {user.discord}</h5>
              <p class="card-text">Points: {user.points}</p>
            </div>
          </div>
          ))}</div>

          
       
        </div>
      )}
      </body>
    </>
  );
}

export default App;
