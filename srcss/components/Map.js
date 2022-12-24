import  GoogleMapReact from 'google-map-react'
//import { useEffect , useState } from 'react'
import PharmacyMarker from './PharmacyMarker'
//import UserMarker from './UserMarker'


const Map = ({eventData , center , zoom}) => {
  //const [curent_position , setCurent_position] = useState([])
 /* useEffect(()=>{
     navigator.geolocation.getCurrentPosition((position)=>{
     // setCurent_position(position.coords) 
      console.log(curent_position.latitude)
      
      //recenter the map
      
      if (curent_position != null) {
        Map.defaultProps = {
          center: { 
              lat: curent_position.latitude,
              lng: curent_position.longitude
          },
          zoom : 6
      }
      }
      
    }) 
    
  }) */
  const markers = eventData.map(ev =>{
    // if de gardde mzl khass t9ad
      return <PharmacyMarker  lat={ev.lat} lng={ev.lng}/>
  })
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{key : 'AIzaSyAiMmcemhytcmpz3EzWxYysj1cozaGtrFE'}}
        defaultCenter={ {center} }
        defaultZoom = { zoom }
      >
        {markers}
        
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    center: { 
        lat: 33.189283,
        lng: -8.503153
    },
    zoom : 6
}

export default Map
