import {useState, useEffect} from 'react'
import Map from './components/Map'
import Loadimg from './components/Loadimg'


function App() {
  const [eventData , setEventData] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      const res = await fetch('http://localhost:8090/students/all')
      const result = await res.json()

      setEventData(result)
      setLoading(false)
    }

    
    fetchEvents()
  },[])



  return (
    <div>
    { !loading ? <Map eventData={eventData} /> : <Loadimg /> }
    </div>
  );
}

export default App;
