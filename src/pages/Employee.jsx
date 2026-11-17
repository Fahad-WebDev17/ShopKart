import React, { Component } from 'react'

function Employee ( {name, age} ) {

    // let name = props.name ;
    // let age = props.age ;

    // let {name, age} = props ;  // Destructuring 




    return (

      <div>

        <h2> Employee Details </h2>

        <h3>Name :  {name} </h3> 

        <h3>Age :  {age} </h3>
        
      </div>

    )

  }


export default Employee ; 
