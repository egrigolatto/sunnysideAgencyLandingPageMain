import  Logo  from "./Logo";
import { NavBar } from "./NavBar";
import { Redes } from "./Redes";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Logo fill="hsl(167, 40%, 24%)" />
        <NavBar />
        <Redes/>
      </div>
    </div>
  );
};

export { Footer };
