import React from 'react'
import MainIcons from "../MainIcons/MainIcons.jsx"
import MainTitle from '../MainTitles/MainTitle.jsx'
import MainImage from '../MainImage/MainImage.jsx'
import "../Main/Main.css"

const Main = () => {
  return (
    <main>
      <MainIcons/>
      <article>
        <MainTitle/>
        <MainImage/>
      </article>
    </main>
  )
}

export default Main