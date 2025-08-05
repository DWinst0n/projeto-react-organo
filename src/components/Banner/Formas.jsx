import circulo1 from "../../img/circulo1.png";
import circulo2 from "../../img/circulo2.png";
import triangulo from "../../img/triangulo.png";

const Formas = ({ componente }) => {
	let classeNome;

	switch (componente) {
		case "banner":
			classeNome = "banner__shape";
			break;
		case "time":
			classeNome = "time__shape";
			break;
		case "footer":
			classeNome = "footer__shape";
			break;
		default:
			break;
	}

	return (
		<div className={`formas__container ${classeNome}`}>
			<img src={circulo1} className={`forma__tipo1 circulo`} alt="" />

			<img src={triangulo} className={`forma__tipo1 triangulo`} alt="" />

			<img src={triangulo} className={`forma__tipo2 triangulo2`} alt="" />

			<img src={circulo2} className={`forma__tipo2 circulo2`} alt="" />
		</div>
	);
};

export default Formas;
