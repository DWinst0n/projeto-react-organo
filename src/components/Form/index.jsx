import CampoArquivo from "./CampoArquivo";
import CampoSelect from "./CampoSelect";
import CampoTexto from "./CampoTexto";
import Botao from "./Botao";
import "./form.css";
import { useState } from "react";
const Form = (p) => {
	const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [arquivo, setArquivo] = useState({});
	const [nomeTime, setTime] = useState("");

	function cadastrar(e) {
		e.preventDefault();
		p.aoCadastro({
			nome,
			cargo,
			arquivo,
			nomeTime,
		});
	}
	return (
		<section className="form__container">
			<form className="formulario" onSubmit={cadastrar}>
				<h3>Preencha os dados para criar o card do colaborador.</h3>
				<CampoTexto valor={nome} aoAlterado={(valor) => setNome(valor)} obrigatorio={true} dado="Nome" />
				<CampoTexto valor={cargo} aoAlterado={(valor) => setCargo(valor)} obrigatorio={true} dado="Cargo" />
				<CampoArquivo valor={arquivo} aoAlterado={(valor) => setArquivo(valor)} />
				<CampoSelect
					valor={nomeTime}
					aoAlterado={(valor) => setTime(valor)}
					obrigatorio={true}
					dado="Time"
					times={times}
				/>

				<Botao>Criar card</Botao>
			</form>
		</section>
	);
};

export default Form;
