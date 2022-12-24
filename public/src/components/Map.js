import { useState, use } from 'react'
import GoogleMapReact from 'google-map-react'
import PharmacyMarker from './PharmacyMarker'
import LocationInfoBox from './LocationInfoBox'
import UserMarker from './UserMarker'





const Map = ({ eventData, center , zoom , curent_position}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map((ev, index) => {
            return <PharmacyMarker key={index} lat={ev.lat} lng={ev.log} onClick={() => setLocationInfo({ id: ev.id, nom: ev.nom , adresse : ev.adresse})} />
    })
    return (
        <div className="map">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDmHPDwLR-uep92-ZIO_eBWRyteGhTWjEU' }}
                center ={ {lat:curent_position.latitude, lng:curent_position.longitude} }
                defaultZoom={ zoom }
                defaultCenter={center}
                options={{ disableDefaultUI: true, zoomControl: true, clickableIcons : false , mapId : "918744193444d0ce" }}               
            >
                <UserMarker lat={curent_position.latitude} lng={curent_position.longitude}  />
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: { 
        lat: 33.189283,
        lng: -80.503153
    },
    zoom : 15
}


export default Map
