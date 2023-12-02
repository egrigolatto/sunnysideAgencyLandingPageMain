import img1m from '../assets/images/mobile/image-transform.jpg'
import img1d from '../assets/images/desktop/image-transform.jpg'
import img2m from '../assets/images/mobile/image-stand-out.jpg'
import { BtnLearnMore } from './BtnLearnMore';
import img2d from '../assets/images/desktop/image-stand-out.jpg'


const Section1 = () => {
  
    return (
      <section className="section1">

       
          <div className="img1">
            <img className="mobile" src={img1m} alt="imgMobile" />
            <img className="desktop" src={img1d} alt="imgDesktop" />
          </div>

          <div className="text1">
            <h2>
              Transform your brand
            </h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <BtnLearnMore color="hsl(51, 100%, 49%)" />
          </div>
        
          <div className="img2">
            <img className="mobile" src={img2m} alt="imgMobile" />
            <img className="desktop" src={img2d} alt="imgDesktop" />
          </div>

          <div className="text2">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <BtnLearnMore color="hsl(7, 99%, 70%)" />
          </div>
       
      </section>
    );
}

export { Section1 }