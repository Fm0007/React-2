import { MapContainer, TileLayer , useMapEvents , Marker ,Popup} from 'react-leaflet'

import {useEffect, useState} from 'react'
import Routing from './Routing'


const Map = ({eventData,choosePosition,curent_position,selected_PH}) => {
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState(null)
  useEffect(() => {

    if(selected_PH!=0 && position!=null){
      setLoading(false)
    }


    
  })
    function LocationMarker() {
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            choosePosition(e.latlng)
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            console.log(selected_PH)
          },
        })
        
          return position === null ? null : (
            <Marker position={position}>
              <Popup>You are here</Popup>
            </Marker>
          )
      }
      


    const markers = eventData.map((ev, index) => {
        
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
    { !loading ? <Routing source={curent_position} destination={selected_PH} /> : <></>}
</MapContainer>
    </div>
  )
}

export default Map



