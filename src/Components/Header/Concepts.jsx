
export default function Concept(props){
    return(
      <li>
        <img src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>

    )
  }