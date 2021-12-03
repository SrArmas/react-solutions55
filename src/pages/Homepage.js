import axios from "axios"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"

export default function Characters(){

  const [ characters, setCharacters ] = useState([])

  const fetchCharacters = async () => {
    //fetching the characters
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/hp/characters")
    setCharacters(response.data)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])
 
  return(
    <div>
      <h1>Characters Page</h1>
      {!characters 
        ? "Loading" 
        : characters 
        //sorting characters alphabetically
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(char => (
            // using a different component to display the character
            <CharacterCard 
              key={char.id}
              id={char.id}
              houseId={char.houseId}
              name={char.name} 
              born={char.born} 
              img={char.imgUrl} 
              house={char.house?.name}/>
          )
        )
      }
    </div>
  )
}