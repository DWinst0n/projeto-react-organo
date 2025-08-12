import { useState, useEffect } from "react";
import { PlusSquareIcon } from "@phosphor-icons/react";

import "./app.css";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Times from "./components/Times";
import Footer from "./components/Footer";
import Botao from "./components/Form/Botao";

function App() {
	const [colaboradores, setColaboradores] = useState(() => {
		const colabsGuardados = localStorage.getItem("colaboradores");
		return colabsGuardados ? JSON.parse(colabsGuardados) : [];
	});

	const [times, setTimes] = useState(() => {
		const timesGuardados = localStorage.getItem("times");
		return timesGuardados ? JSON.parse(timesGuardados) : [];
	});

	const [formOpen, setOpenForm] = useState(false);

	useEffect(() => {
		localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
	}, [colaboradores]);

	useEffect(() => {
		localStorage.setItem("times", JSON.stringify(times));
	}, [times]);

	useEffect(() => {
		const targetEl = formOpen ? document.getElementById("formContainer") : document.getElementById("containerTime");

		if (targetEl) {
			targetEl.scrollIntoView({ behavior: "smooth" });
		}
	}, [formOpen]);

	const aoNovoColaboradorCadastrado = (colaborador) => {
		setColaboradores((prev) => {
			if (prev.some((c) => c.id === colaborador.id)) {
				return prev;
			}
			return [...prev, colaborador];
		});
	};

	const aoCriarTime = (novoTime) => {
		setTimes((prev) => {
			if (prev.some((t) => t.id === novoTime.id)) {
				return prev;
			}
			return [...prev, novoTime];
		});
	};

	return (
		<div className="App">
			<Banner />
			<Form
				aoCadastro={aoNovoColaboradorCadastrado}
				formOpen={formOpen}
				fecharForm={() => setOpenForm(false)}
				times={times.map((time) => time.nome)}
				criarTime={aoCriarTime}
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
