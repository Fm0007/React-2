import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/medical-bag'

const LocationInfoBox = ({ info }) => {
    return (
        <div  className="location-info">
            
            <h2> <Icon icon={locationIcon} > </Icon>  { info.nom }</h2>
            <ul>
    <li>Nom : <strong>{ info.nom }</strong></li>
    <li>Adresse : <strong>{ info.adresse }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
