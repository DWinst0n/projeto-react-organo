import CampoArquivo from "./CampoArquivo";
import CampoSelect from "./CampoSelect";
import CampoTexto from "./CampoTexto";
import Botao from "./Botao";
import "./form.css";
const Form = () => {
	const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

	function salvar(e) {
		e.preventDefault();
		console.log(e, "card salvo!");
	}
	return (
		<section className="form__container">
			<form className="formulario" onSubmit={salvar}>
				<h3>Preencha os dados para criar o card do colaborador.</h3>
				<CampoTexto obrigatorio={true} dado="Nome" requered />
				<CampoTexto obrigatorio={true} dado="Cargo" requered />
				<CampoArquivo />
				<CampoSelect obrigatorio={true} dado="Time" times={times} requered />

				<Botao>Criar card</Botao>
			</form>
		</section>
	);
};

export default Form;
