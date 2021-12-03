import { Link } from "react-router-dom"

export default function CharacterCard(props){

  return(
    <div>
      <h3>{props.name}</h3>
      <img src={props.img}/>
      <p><b>Born in: </b>{props.born}</p>
      <p><b>House in Hogwarts: </b>{props.house}</p>
      <Link to={`/character/${props.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  )
}