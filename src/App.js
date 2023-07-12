/*Tutorials and Documentation Used:
1) Getting Started: https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/ 
  Specific Hook Documentation:
    1) useState Hook: https://react.dev/reference/react/useState
      a) Summary: useState allows us to have a function that changes the state of a data structure, and we can manage the structure and
                  the function in a single object 
    2) useEffect Hook: https://react.dev/reference/react/useEffect 
      b) Summary: useEffect can be used to call our fetchUserData. It is typically used to manage actions after render or other side effects
    3) Helped me dynamically number the list: https://stackoverflow.com/questions/62840731/add-numbers-to-list-item-react-native
*/

import 'bootstrap/dist/css/bootstrap.css';
import medal from './medal.png';
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
              <div class="column">
                <div class="card" style={{ display: 'flex', alignItems: 'center' }}>
                  <img class="card-img-top" src= {medal} height="200" alt="Card image" />
                  <div class="card-body">
                    <h4 class="card-title">{index + 1}. {user.discord}</h4>
                    <h5 class="card-text" style={{textAlign: 'center'}}>{user.points}</h5>
                  </div>
                </div>
              </div>
           ))}
          </div>

          <div id="containerRemaining">
            {users.slice(3).map((user, index) => (
            <div class="row">
            <div class="card" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title">{index + 4}. {user.discord}</h5>
              <p class="card-text">Points: {user.points}</p>
            </div>
          </div>
        </div>
        ))}
        </div>
      </div>
      )}
      </body>
    </>
  );
}

export default App;
