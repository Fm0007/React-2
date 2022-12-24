import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  const [curent_position , setCurent_position] = useState()
  const [loading1, setLoading1] = useState(true)
  const [selected_PH , setSelected_PH] = useState("0")
  const [selected_zone , setSelected_Zone] = useState("0")
  const [pharmacytData, setPharmacyData] = useState([])
  const [loading, setLoading] = useState(false)
  const [ville , setVille] = useState([])
  const [center , setCenter] = useState(0)
    const choosePosition = (center) => {
        setCurent_position(center);
      };
     
      const chooseZone = (id) => {
        setSelected_Zone(id);
      };
      const choosePH = (id) => {
        setSelected_PH(id);
      };
  
  
  useEffect(() => {
    const fetchPharmacy = async () => {
      setLoading(true)
      
      const res = await fetch('http://localhost:8090/zones/pharmacies/'+selected_zone)
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
    if(selected_zone!="0")
    {
      fetchPharmacy()
    }
   
    fetchVille()
    
  }, [selected_zone] )

  return (
    <div>
      <Header ville={ville} chooseZone={chooseZone} />
      <Navbar selected_zone={selected_zone} choosePH={choosePH}  />
      { !loading ? <Map selected_PH={selected_PH} eventData={pharmacytData} choosePosition={choosePosition} center={center} curent_position={curent_position} /> : <Loader /> }
    </div>
  );
}

export default App;