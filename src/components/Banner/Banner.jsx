import "./banner.css";
import logo from "../../img/logo.png";
import circulo1 from "../../img/circulo1.png";
import circulo2 from "../../img/circulo2.png";
import triangulo from "../../img/triangulo.png";
import imagembanner from "../../img/Imagem duotone.png";

export const Banner = () => {
	return (
		<header className="app__header">
			<img src={logo} className="logo" alt="logo" />
			<div className="formas__container">
				<img src={circulo1} className="forma__tipo1" alt="" id="circulo1" />

				<img src={triangulo} className="forma__tipo1" alt="" id="triangulo1" />

				<img src={triangulo} className="forma__tipo2" alt="" id="triangulo2" />

				<img src={circulo2} className="forma__tipo2" alt="" id="circulo2" />
			</div>

			<div className="titulo__container">
				<h1 className="titulo__principal">Pessoas e times</h1>
				<h2 className="titulo__secundario">organizados em um só lugar!</h2>
			</div>
			<img src={imagembanner} className="imagem__banner" alt="" />
		</header>
	);
};
