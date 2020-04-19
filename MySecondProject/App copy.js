import React from 'react';
import {Text} from 'react-native';


export default function MyApp() {
  
  function getFullName(fname,mName,lName){
    return fname + " " + mName + " " + lName;
  }
  const pet ="Dog";
    return (
  
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340!  {"\n"}
        Me full name is {getFullName("Emmanuel", "Nagbe","Walker")} {"\n"}
     I want you, {pet} !</Text>
   
      
    
  );
}



