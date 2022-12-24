import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Navbar from './components/Navbar'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [curent_position , setCurent_position] = useState([])
  useEffect(() => {
    
    const fetchEvents = async () => {
      setLoading(true)
      
      const res = await fetch('http://localhost:8080/students/all')
      const result = await res.json()
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setCurent_position(position.coords)  
      })
      if(curent_position.length===0){
        setCurent_position({lat: 33.189283 , lng: -80.503153})
      }
      setEventData(result)
      setLoading(false)
    }

    fetchEvents()
  }, [] )

  return (
    <div>
      <Navbar />
      { !loading ? <Map eventData={eventData} curent_position={curent_position} /> : <Loader /> }
    </div>
  );
}

export default App;
