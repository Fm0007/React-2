import React from 'react'
import {CCard,CCardImage,CCardBody,CCardTitle,CCardText,CListGroup} from '@coreui/react'
import { Icon } from '@iconify/react'



const Result = ({nom,id,lng,lat,chooseCenter,adresse,choosePH}) => {
  return (
    <>
        <CCard  style={{ width: '16rem' }}>

        <CCardImage orientation="top" src="https://minajliki.ma/wp-content/uploads/2022/06/AF1QipMTg2RGocd6stf1PqenaN39CFwhaSsdbNYjlblgw1600-h1000-k-no.jpeg" />
        
        <CCardBody>

          <CCardTitle><Icon icon="healthicons:pharmacy"  />{nom}</CCardTitle>

          <CCardText>
           Adresse : {adresse}

          </CCardText>

        </CCardBody>

        <CListGroup flush>

          <button className='btn-loc' onClick={() => choosePH({lat, lng})}><Icon icon="entypo:location" /> Localiser </button>

        </CListGroup>

        <CCardBody>

        

        </CCardBody>

        </CCard>
    </>
      
  )
}

export default Result
