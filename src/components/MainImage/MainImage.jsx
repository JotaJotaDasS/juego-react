import React from 'react'
import Asset from "../MainImage/assets/image/perfil.png"
import "../MainImage/MainImage.css"

const MainImage = () => {
  return (
    <div className='PerfilImg'>
        <img classname="logo" src={Asset} alt='logo'/>
    </div>
  )
}

export default MainImage  