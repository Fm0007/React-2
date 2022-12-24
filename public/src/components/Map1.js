import { useState , useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import PharmacyMarker from './PharmacyMarker'
import LocationInfoBox from './LocationInfoBox'
import UserMarker from './UserMarker'



const Map = ({ eventData, center , zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [curent_position , setCurent_position] = useState([])

    useEffect(() => { 
        setLoading(true)
        navigator.geolocation.getCurrentPosition((position)=>{
        setCurent_position(position.coords) 
        
      })
      setLoading(false)
    }, [])
    
    
    const markers = eventData.map((ev, index) => {
            return <PharmacyMarker key={index} lat={ev.lat} lng={ev.lng} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    })
    
    return (
        <div className="map">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDmHPDwLR-uep92-ZIO_eBWRyteGhTWjEU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <UserMarker lat={curent_position.latitude} lng={curent_position.longitude} onClick={() => setLocationInfo({ id: null , title: null })} />
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center :  {
        lat: 33.189283,
        lng: -8.503153
    },
    zoom : 14
}

export default Map
