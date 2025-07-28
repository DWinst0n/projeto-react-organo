import "./footer.css";
import logo from "../../img/logo.png";
import circulo1 from "../../img/circulo1.png";
import circulo2 from "../../img/circulo2.png";
import triangulo from "../../img/triangulo.png";
import iconeFb from "../../img/fb.png";
import iconeTw from "../../img/tw.png";
import iconeIg from "../../img/ig.png";

const Footer = () => {
	return (
		<footer className="app__footer">
			<div className="icones__container">
				<img src={iconeFb} alt="Icone com a logo do Facebook" className="icone__footer" />
				<img src={iconeTw} alt="Icone com a logo do X" className="icone__footer" />
				<img src={iconeIg} alt="Icone com a logo do Instagram" className="icone__footer" />
			</div>
			<div className="formas__container footer__shape">
				<img src={circulo1} className="forma__tipo1" alt="" id="circulo3" />

				<img src={triangulo} className="forma__tipo1" alt="" id="triangulo3" />

				<img src={triangulo} className="forma__tipo2" alt="" id="triangulo4" />

				<img src={circulo2} className="forma__tipo2" alt="" id="circulo4" />
			</div>
			<img src={logo} className="logo__footer" alt="logo" />
			<span>Desenvolvido por Davi Winston, estudante Alura</span>
		</footer>
	);
};

export default Footer;
