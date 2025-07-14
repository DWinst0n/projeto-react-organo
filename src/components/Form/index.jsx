import { CampoArquivo } from "./CampoArquivo";
import CampoSelect from "./CampoSelect";
import { CampoTexto } from "./CampoTexto";
import { Botao } from "./Botao";
import "./form.css";
const Form = () => {
	const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];
	return (
		<section className="form__container">
			<form className="formulario">
				<h3>Preencha os dados para criar o card do colaborador.</h3>
				<CampoTexto dado="Nome" requered />
				<CampoTexto dado="Cargo" requered />
				<CampoArquivo />
				<CampoSelect dado="Time" times={times} requered />

				<Botao>Criar card</Botao>
			</form>
		</section>
	);
};

export default Form;
