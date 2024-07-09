import Concept from "./Header/Concepts"
 import { CORE_CONCEPTS } from "../data"
export default function CoreConcepts(){
    return(
<section id="core-concepts">
  <ul>
    {CORE_CONCEPTS.map((itemIndex)=>(<Concept key={itemIndex.title} {...itemIndex}/>))}

        </ul>
        <h2>Time to get started!</h2>
        </section>
        )
        }

