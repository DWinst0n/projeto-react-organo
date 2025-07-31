import { useState, useEffect } from "react";
import "./app.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Times from "./components/Times";
import Footer from "./components/footer";
import Botao from "./components/Form/Botao";
import botaoAddCard from "./img/plus-square.svg";

function App() {
	const [colaboradores, setColaboradores] = useState([]);
	const [formOpen, setOpenForm] = useState(false);

	const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

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
				times={times}
			/>
			<Botao
				className={"btn__openForm"}
				onClick={() => setOpenForm(true)}
				style={{
					display: formOpen ? "none" : "block",
				}}>
				<img src={botaoAddCard} alt="" />
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
