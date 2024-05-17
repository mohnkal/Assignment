import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css"
import { IoIosCall } from "react-icons/io";


const Card = () => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc").then(response => {
            setUserData(response.data.results[0]);
         });
        }
    , []);
  return (
    <>
    {userData ? (
    <div className="container">
    <div className='outer'>
      <div className="left"><img src={userData.picture.large} alt="women" /></div>
      <div className="right">
        <div className="name">
            <strong className="fname">{userData.name.first}</strong>
            <strong className="lname">{userData.name.last}</strong>
        </div>
        <strong className="gender">{userData.gender}</strong>
        <strong className="phone"><IoIosCall className='call' />{userData.phone}</strong>
      </div>
    </div>
    </div>
    ):(  <p>Loading...</p>)}
    </>
  )
}

export default Card
