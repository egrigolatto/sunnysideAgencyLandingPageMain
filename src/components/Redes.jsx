import face from '../assets/images/icon-facebook.svg';
import insta from '../assets/images/icon-instagram.svg';
import tw from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';

const Redes = () => {
    return (
      <div className="redes">
        <img src={face} alt="face" />
        <img src={insta} alt="insta" />
        <img src={tw} alt="tw" />
        <img src={pinterest} alt="pinterest" />
      </div>
    );
}

export { Redes }