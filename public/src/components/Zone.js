import { useState, useEffect } from 'react'
import ResultContainer from './ResultContainer'

const Zone = ({ville}) => {
  const [zones , setZones] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log(ville)
    const fetchZones = async () => {
      setLoading(true)
      
      const res = await fetch('http://localhost:8090/villes/zones/'+ville)
      const result = await res.json()
      setZones(result)
      setLoading(false)
    }
    if(ville!=0) {
      fetchZones()
    }
    

  },[ville])
  const zone = zones.map((ev, index) => {
      return <option value={ev.id} >
          {ev.nom}
      </option>
      //onChange={() => setLocationInfo({ id: ev.id, lat: ev.lat })}
    
  })  
  if(ville!=="0"){
    return (
      <>
          <h3 id='zonet'> zone :</h3>
           <select name="zones" id="zone-select">
              <option value="0">--Veillez Choissir une Zone--</option>
              {zone}
          </select>
          
      </>
     
    )

  }
  
}
export default Zone
