import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/medical-bag'

const PharmacyMarker = ( { lat, lng , onClick } ) => {
  return (
    <div className='marker' onClick={onClick}>
       <Icon icon={locationIcon} className="location-icon"></Icon>
    </div>
  )
}

export default PharmacyMarker
