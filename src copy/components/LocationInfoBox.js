import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/medical-bag'

const LocationInfoBox = ({ info }) => {
    return (
        <div  className="location-info">
            <h2> <Icon icon={locationIcon} > </Icon>  Pharmacie</h2>
            <ul>
    <li>Nom : <strong>{ info.lat }</strong></li>
    <li>Adresse : <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
