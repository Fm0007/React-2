import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/circle-small'

const UserMarker = ( { lat, lng , onClick } ) => {
  return (
    <div className='marker' onClick={onClick}>
       <Icon icon={locationIcon} className="user-icon"></Icon>
    </div>
  )
}

export default UserMarker
