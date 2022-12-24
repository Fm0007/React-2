import {Icon} from '@iconify/react'

const PharmacyMarker = ( { lat, lng , onClick } ) => {
  return (
    <div className='' >
      <Icon  icon="healthicons:pharmacy" className="location-icon"></Icon>
    </div>
  )
}

export default PharmacyMarker
