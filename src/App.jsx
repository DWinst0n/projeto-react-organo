import { useState, useEffect } from "react";
import { PlusSquareIcon } from "@phosphor-icons/react";

import "./app.css";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Times from "./components/Times";
import Footer from "./components/footer";
import Botao from "./components/Form/Botao";

function App() {
	const [colaboradores, setColaboradores] = useState([]);
	const [formOpen, setOpenForm] = useState(false);

	const times = [
		{
			nome: "Programação",
			cor: "#57c278",
		},
		{
			nome: "Front-End",
			cor: "#82cffa",
		},
		{
			nome: "Data Science",
			cor: "#a6d157",
		},
		{
			nome: "Devops",
			cor: "#e06b69",
		},
		{
			nome: "UX e Design",
			cor: "#db6ebf",
		},
		{
			nome: "Mobile",
			cor: "#ffba05",
		},
		{
			nome: "Inovação e Gestão",
			cor: "#ff8a29",
		},
	];

	const aoNovoColaboradorCadastrado = (colaborador) => {
		JSON.stringify(colaborador);
		setColaboradores([...colaboradores, colaborador]);
	};

	useEffect(() => {
		if (formOpen) {
			const formEl = document.getElementById("formContainer");
			formEl.scrollIntoView({ behavior: "smooth" });
		} else {
			const equipesEl = document.getElementById("containerTime");
			equipesEl.scrollIntoView({ behavior: "smooth" });
		}
	}, [formOpen]);

	return (
		<div className="App">
			<Banner />
			<Form
				aoCadastro={(colaborador) => aoNovoColaboradorCadastrado(colaborador)}
				formOpen={formOpen}
				fecharForm={() => setOpenForm(false)}
				times={times.map((time) => time.nome)}
			/>
			<Botao
				className={"btn__openForm"}
				onClick={() => setOpenForm(true)}
				style={{
					display: formOpen ? "none" : "block",
				}}>
				<PlusSquareIcon size={32} color="var(--cor-contraste)" />
			</Botao>
			<div className="minha__organizacao__container">
				<h3>Minha Organização:</h3>
				<div></div>
			</div>
			<Times colabs={colaboradores} times={times} />
			<Footer />
		</div>
	);
}

export default App;
