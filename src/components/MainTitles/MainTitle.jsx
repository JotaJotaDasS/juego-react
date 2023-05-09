import React from 'react'
import {IoMdArrowDropdownCircle} from "react-icons/io"
import "../MainTitles/MainTitle.css"

const MainTitle = () => {
  return (
    <section>
      <div className='section-title'>
      <h1>Hi I'm Jorge</h1>
      <h5>Frontend developer</h5>
      </div>
      <p>High level experience in web design and develoment knowledge, producing quality work</p>
      <button>Contact Me <IoMdArrowDropdownCircle/></button>
    </section>
  )
}

export default MainTitle