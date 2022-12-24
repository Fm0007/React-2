import {useEffect,useState} from 'react'
import Result from './Result'


const ResultContainer = ({selected_zone,choosePH}) => {
  const [results , setResult] = useState([])

  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetch('http://localhost:8090/zones/pharmacies/'+selected_zone)
      const result = await res.json()
      setResult(result)
    }
    if(selected_zone!=0) {
      fetchResult()
    }

    

  },[selected_zone])
  const resultat = results.map((ev, index) => {
      return <Result key={ev.id} id={ev.id} nom={ev.nom} adresse={ev.adresse} lat={ev.lat} lng={ev.log} choosePH={choosePH} />
          })
 
  if(selected_zone!=0) {
  return (
    <div className='result-container'>
      {resultat}
    </div>
  )
  }
  else{
    return (
      <div className='result-container'>
      </div>
    )
  }
}

export default ResultContainer
