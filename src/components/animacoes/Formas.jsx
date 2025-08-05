import "./animacoes.css";

import { CircleIcon, TriangleIcon } from "@phosphor-icons/react";

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
			classeNome = "banner__shape";
			break;
	}

	return (
		<div className={`formas__container ${classeNome}`}>
			<CircleIcon weight="thin" className="forma__tipo1 circulo" />
			<TriangleIcon weight="thin" className="forma__tipo1 triangulo" />
			<TriangleIcon weight="thin" className="forma__tipo2 triangulo2" />
			<CircleIcon weight="thin" className="forma__tipo2 circulo2" />

			{/* 			<img src={circulo1} className={`forma__tipo1 circulo`} alt="" />

			<img src={triangulo} className={`forma__tipo1 triangulo`} alt="" />

			<img src={triangulo} className={`forma__tipo2 triangulo2`} alt="" />

			<img src={circulo2} className={`forma__tipo2 circulo2`} alt="" /> */}
		</div>
	);
};

export default Formas;
