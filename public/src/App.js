import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  const [pharmacytData, setPharmacyData] = useState([])
  const [loading, setLoading] = useState(false)
  const [curent_position , setCurent_position] = useState([])
  const [ville , setVille] = useState([])
  
  useEffect(() => {
    const fetchPharmacy = async () => {
      setLoading(true)
      
      const res = await fetch('http://localhost:8090/pharmacies/all')
      const result = await res.json()
      setPharmacyData(result)
      setLoading(false)
    }
    const fetchVille = async () => {
      setLoading(true)
      
      const res = await fetch('http://localhost:8090/villes/all')
      const result = await res.json()
      setVille(result)
      setLoading(false)
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setCurent_position(position.coords)  
    })
    fetchVille()
    fetchPharmacy()
  }, [] )

  return (
    <div>
      <Header ville={ville} />
      <Navbar  />
      { !loading ? <Map eventData={pharmacytData} curent_position={curent_position}  /> : <Loader /> }
    </div>
  );
}

export default App;
