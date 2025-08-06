import "./animacoes.css";

import React from "react";

import { CircleIcon, TriangleIcon } from "@phosphor-icons/react";

const Formas = ({ componente, cor }) => {
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

	if (classeNome === "time__shape") {
		return (
			<div className="formas__container time__shape">
				{[...Array(5)].map((_, i) => (
					<React.Fragment key={i}>
						<CircleIcon
							className={`forma__tipo__time circuloTime${(i + 1) % 2 === 0 ? "" : "2"} iconeTimeCirculo${i + 1}`}
							weight="thin"
							color={cor}
						/>
						<TriangleIcon
							className={`forma__tipo__time trianguloTime${(i + 1) % 2 === 0 ? "" : "2"} iconeTimeTriangulo${i + 1}`}
							weight="thin"
							color={cor}
						/>
					</React.Fragment>
				))}
			</div>
		);
	} else {
		return (
			<div className={`formas__container ${classeNome}`}>
				<CircleIcon weight="thin" className="forma__tipo1 circulo" />
				<TriangleIcon weight="thin" className="forma__tipo1 triangulo" />
				<TriangleIcon weight="thin" className="forma__tipo2 triangulo2" />
				<CircleIcon weight="thin" className="forma__tipo2 circulo2" />
			</div>
		);
	}
};

export default Formas;
