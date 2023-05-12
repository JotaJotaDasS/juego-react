import React from "react"
import SocialIconMood from "../SocialIconMood/SocialIconMood"
import "../Nav/Nav.css"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact me</li>
            <li className="mood-item"><SocialIconMood/></li>
        </ul>
    </nav>
  )
}

export default Nav

const MoodItem = document.querySelector(".mood-item");
const BodyVery = document.querySelector("#body");

MoodItem.addEventListener("click", ()=>{
  BodyVery.classList.toggle("mood")
})