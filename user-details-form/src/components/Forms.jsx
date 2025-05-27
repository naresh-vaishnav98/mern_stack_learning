import React, { useState } from 'react'
import states from './States'
import UserForm from './UserForm';
import UserData from './UserData';

export default function Forms() {
    let [States, setStates] = useState([]);
    let [userInfo, setUserInfo] = useState([]);

    var userData = JSON.parse(localStorage.getItem('User_Info'));
    // console.log(userData)

    var stateFilter = (event) => {
        // console.log(event.target.value);
        const newStates = states.filter( (v,i) => {
            if(event.target.value == v.country_name){
                return(v.name);
            }            
        } )
        setStates(newStates);
    }
  return (
      <>
        <UserForm States={States} setStates={setStates} stateFilter={stateFilter} userInfo={userInfo} setUserInfo={setUserInfo}/>
        <UserData userData={userData}/>
      </>
  )
}
