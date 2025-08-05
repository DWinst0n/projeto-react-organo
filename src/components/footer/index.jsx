import "./footer.css";
import logo from "../../img/logo.png";
import iconeFb from "../../img/fb.png";
import iconeTw from "../../img/tw.png";
import iconeIg from "../../img/ig.png";
import Formas from "../Banner/Formas";

const Footer = () => {
	return (
		<footer className="app__footer">
			<div className="icones__container">
				<img src={iconeFb} alt="Icone com a logo do Facebook" className="icone__footer" />
				<img src={iconeTw} alt="Icone com a logo do X" className="icone__footer" />
				<img src={iconeIg} alt="Icone com a logo do Instagram" className="icone__footer" />
			</div>
			<Formas componente={"footer"} />
			<img src={logo} className="logo__footer" alt="logo" />
			<span>Desenvolvido por Davi Winston, estudante Alura</span>
		</footer>
	);
};

export default Footer;
