import { Galeria } from "./Galeria"
import { Section2 } from "./Section2"
import { Testimonios } from "./Testimonios"
import { Section1 } from "./section1"


const Main = () => {
    return(
      <main className="main">
        <Section1 />
        <Section2 />
        <Testimonios />
        <Galeria /> 
      </main>
    )
}

export { Main }