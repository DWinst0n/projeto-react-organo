import { CampoArquivo } from "./CampoArquivo";
import { CampoTexto } from "./CampoTexto";
import "./form.css";
const Form = () => {
	return (
		<section className="form__container">
			<form className="formulario">
				<h3>Preencha os dados para criar o card do colaborador.</h3>
				<CampoTexto dado="Nome" />
				<CampoTexto dado="Cargo" />
				<CampoArquivo />
			</form>
		</section>
	);
};

export default Form;
