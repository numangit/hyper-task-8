import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [activityTime, setActivityTime] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])

  const addToList = (activity) => {
    console.log(activity.timeRequired)
    let selectActivityTime = activityTime + activity.timeRequired;

    setActivityTime(selectActivityTime)
  }

  return (
    <div className="row text-center App">
      <Main activities={activities} addToList={addToList} ></Main>
      <UserDetails activityTime={activityTime} ></UserDetails>
    </div>
  );
}

export default App;
