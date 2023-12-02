import PropTypes from "prop-types";

const Testimonio = ({ testimonios }) => {
  return (
    <div>
      <img src={testimonios.foto} alt="" />
      <p>{testimonios.testimonio}</p>
      <h4>{testimonios.nombre}</h4>
      <small>{testimonios.cargo}</small>
    </div>
  );
};
Testimonio.propTypes = {
  testimonios: PropTypes.object,
};

export { Testimonio };
