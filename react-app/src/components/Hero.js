import React from 'react'

function Hero({heroName}) {
    if(heroName==="Joker"){
        throw new Error("Given name is not a hero")
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero