import img1m from '../assets/images/mobile/image-gallery-cone.jpg';
import img2m from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import img3m from "../assets/images/mobile/image-gallery-orange.jpg";
import img4m from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import img1d from "../assets/images/desktop/image-gallery-cone.jpg";
import img2d from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import img3d from "../assets/images/desktop//image-gallery-orange.jpg";
import img4d from "../assets/images/desktop/image-gallery-sugarcubes.jpg";


const Galeria = () => {
    return (
      <>
        <section className="galeria_mobile">
          <img src={img2m} alt="1" />
          <img src={img3m} alt="2" />
          <img src={img1m} alt="3" />
          <img src={img4m} alt="4" />
        </section>
        <section className="galeria_desktop">
          <img src={img2d} alt="1" />
          <img src={img3d} alt="2" />
          <img src={img1d} alt="3" />
          <img src={img4d} alt="4" />
        </section>
      </>
    );
}

export { Galeria }