import { MapContainer, TileLayer, useMap , useMapEvents , Marker ,Popup} from 'react-leaflet'
import {Icon} from '@iconify/react'

import {useState} from 'react'


const Maps = ({eventData}) => {

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }


    const markers = eventData.map((ev, index) => {
        console.log([ ev.lat , ev.log])
        return <Marker  key={index} position={[ ev.lat , ev.log]} >
             <Popup>
                {ev.nom} <br /> Easily customizable.
                </Popup>
            </Marker >
    })


  return (
    <div className='maps' >
      <MapContainer center={[ 33.189283 , -8.503153]} zoom={14} scrollWheelZoom={false}  style={{ width: '100%', height: "100vh" ,marginTop:"77px" }} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <LocationMarker />
    {markers}
</MapContainer>
    </div>
  )
}

export default Maps



