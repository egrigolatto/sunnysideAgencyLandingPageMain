
import { Testimonio } from './Testimonio.jsx';
import clientTestimonials from './clientTestimonials.js';


const Testimonios = () => {

    return (
      <section className='testimonios'>
        <h3>Client testimonials</h3>
        <div className='testimonios__contenedor'>
          {
          clientTestimonials.map((test) => (
            
            <Testimonio key={test.id} testimonios={test} />
          
          ))
        }
        </div>
      </section>
    );
}

export  { Testimonios }