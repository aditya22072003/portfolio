
import React from "react";
import "./app.css";
import styled from "styled-components";
import image1 from "./png/github-icon.png"
import image2 from "./png/linked-in.png"
import image3 from "./png/mail.png"
import image4 from "./png/Aditya.jpg"





const stick=styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #28192b;
    `;


export default function Header(){
    return(
        <div>
        <stick>
        <div id="main">
        <img id="photo" alt="profile-pic" src={image4} />
            
            <div id="bio">
                <span id="name">Aditya Raj</span>Full Stack developer | Student at
                chitkara university.
            </div>
            <div id="space"></div>

            <div id="contact">
                <h4>contact me</h4>
                <div id="icons">
                    <a href="https://github.com/aditya22072003"><img alt="github" src={image1} /></a>
                    <a href="https://www.linkedin.com/in/aditya-jaiswal-2207d/ "><img alt="linkedin" src={image2} /></a>
                    <a href="mailto:araj38283@gmail.com"><img alt="email" src={image3} /></a>
                    <br/>
                </div>
            </div>

        
         
        </div><hr/>
        </stick>

        </div>
    )
}