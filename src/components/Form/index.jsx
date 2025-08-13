import "./form.css";
import { useState } from "react";
import CampoForm from "./CampoFormTxt";
import CampoArquivo from "./CampoArquivo";
import Botao from "./Botao";
import { v4 as criaID } from "uuid";

const Form = ({ times, aoCadastro, formOpen, form2Open, fecharForm, tipo, excluirTimes }) => {
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [arquivo, setArquivo] = useState({});
	const [nomeTime, setTime] = useState("");

	function cadastrarColab(e) {
		e.preventDefault();
		aoCadastro({
			nome,
			cargo,
			arquivo,
			nomeTime,
			id: criaID(),
		});
		fecharForm();
		setNome("");
		setCargo("");
		setArquivo({});
		setTime("");
	}

	const [nomeNovoTime, setNomeNovoTime] = useState("");
	const [corTime, setCorTime] = useState("#000000");

	function cadastrarTime(e) {
		e.preventDefault();
		aoCadastro({
			nome: nomeNovoTime,
			cor: corTime,
			id: criaID(),
		});
		fecharForm();
		setNomeNovoTime("");
		setCorTime("#000000");
	}

	switch (tipo) {
		case "adicionarTime":
			return (
				<section
					className="form__container"
					style={{
						display: form2Open ? "block" : "none",
					}}>
					<form className="formulario" onSubmit={cadastrarTime}>
						<h3>Preencha os dados para criar um novo time.</h3>

						<CampoForm
							valor={nomeNovoTime}
							aoAlterado={(valor) => setNomeNovoTime(valor)}
							obrigatorio={true}
							dado="Nome do Time"
						/>
						<CampoForm
							valor={corTime}
							aoAlterado={(valor) => setCorTime(valor)}
							obrigatorio={true}
							dado="Cor do Time"
							tipo="cor"
						/>
						<span className="form__msg" onClick={excluirTimes}>
							Limpar times vazios.
						</span>
						<div className="botoes__container">
							<Botao
								className={"botao__form"}
								type="button"
								onClick={() => {
									fecharForm();
									setNomeNovoTime("");
									setCorTime("");
								}}>
								Cancelar
							</Botao>
							<Botao className={"botao__form"} type="submit">
								Criar Time
							</Botao>
						</div>
					</form>
				</section>
			);

		default:
			return (
				<section
					className="form__container"
					style={{
						display: formOpen ? "block" : "none",
					}}
					id="formContainer">
					<form className="formulario" onSubmit={cadastrarColab}>
						<h3>Preencha os dados para criar o card do colaborador.</h3>
						<CampoForm valor={nome} aoAlterado={(valor) => setNome(valor)} obrigatorio={true} dado="Nome" />
						<CampoForm valor={cargo} aoAlterado={(valor) => setCargo(valor)} obrigatorio={true} dado="Cargo" />
						<CampoArquivo valor={arquivo} aoAlterado={(valor) => setArquivo(valor)} />
						<CampoForm
							valor={nomeTime}
							aoAlterado={(valor) => setTime(valor)}
							obrigatorio={true}
							dado="Time"
							times={times}
							tipo="select"
						/>
						<span className="form__msg" onClick={form2Open} style={{ cursor: "pointer", textDecoration: "underline" }}>
							Deseja adicionar um novo time?
						</span>
						<div className="botoes__container">
							<Botao
								className={"botao__form"}
								type="button"
								onClick={() => {
									fecharForm();
									setNome("");
									setCargo("");
									setArquivo({});
									setTime("");
								}}>
								Cancelar
							</Botao>
							<Botao className={"botao__form"} type="submit">
								Criar card
							</Botao>
						</div>
					</form>
				</section>
			);
	}
};

export default Form;
