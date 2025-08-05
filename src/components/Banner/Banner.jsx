import "./banner.css";
import logo from "../../img/logo.png";
import imagembanner from "../../img/Imagem duotone.png";
import Formas from "../animacoes/Formas";

export const Banner = () => {
	return (
		<header className="app__header">
			<img src={logo} className="logo" alt="logo" />

			<Formas componente={"banner"} />

			<div className="titulo__container">
				<h1 className="titulo__principal">Pessoas e times</h1>
				<h2 className="titulo__secundario">organizados em um só lugar!</h2>
			</div>
			<img src={imagembanner} className="imagem__banner" alt="" />
		</header>
	);
};
