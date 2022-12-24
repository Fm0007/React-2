import { useState , useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import PharmacyMarker from './PharmacyMarker'
import LocationInfoBox from './LocationInfoBox'
import UserMarker from './UserMarker'
import mapStyles from './mapStyles.json';

const defaultMapOptions = {
  styles: mapStyles
};



const Map = ({ eventData, center , zoom , curent_position }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map((ev, index) => {
            return <PharmacyMarker key={index} lat={ev.lat} lng={ev.lng} onClick={() => setLocationInfo({ id: ev.id, lat: ev.lat })} />
    })
    return (
        <div className="map">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDmHPDwLR-uep92-ZIO_eBWRyteGhTWjEU' }}
                center ={ {lat:curent_position.latitude, lng:curent_position.longitude} }
                defaultZoom={ zoom }
                defaultOptions={defaultMapOptions}
            >
                <UserMarker lat={curent_position.latitude} lng={curent_position.longitude} onClick={() => setLocationInfo({ id: null , title: null })} />
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
