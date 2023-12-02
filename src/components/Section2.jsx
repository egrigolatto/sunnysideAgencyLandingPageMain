import img1m from '../assets/images/mobile/image-graphic-design.jpg';
import img1d from "../assets/images/desktop/image-graphic-design.jpg";
import img2m from "../assets/images/mobile/image-photography.jpg";
import img2d from "../assets/images/desktop/image-photography.jpg";

const Section2 = () => {
    return (
      <section className="section2">
        
        <div className="section2__cont1">
          <img className="mobile" src={img1m} alt="img" />
          <img className="desktop" src={img1d} alt="img" />
          <div>
            <h2>Graphic design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="section2__cont2">
          <img className="mobile" src={img2m} alt="img" />
          <img className="desktop" src={img2d} alt="img" />
          <div>
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    );
}

export { Section2
 }