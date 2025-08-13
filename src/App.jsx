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

	useEffect(() => {
		localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
	}, [colaboradores]);
	useEffect(() => {
		localStorage.setItem("times", JSON.stringify(times));
	}, [times]);

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

	const deletarColab = (id) => {
		setColaboradores(colaboradores.filter((colab) => colab.id !== id));
	};
	const limparTimesVazios = () => {
		const timesComColaboradores = times.filter((time) => colaboradores.some((colab) => colab.nomeTime === time.nome));

		const quantidadeDeletada = times.length - timesComColaboradores.length;

		setTimes(timesComColaboradores);

		if (quantidadeDeletada > 0) {
			alert(`${quantidadeDeletada} time(s) sem colaboradores foram removidos!`);
		} else {
			alert("Nenhum time vazio encontrado!");
		}
	};

	const [formColabOpen, setOpenColabForm] = useState(false);
	const [formTimeOpen, setOpenTimeForm] = useState(false);
	useEffect(() => {
		const targetEl = formColabOpen
			? document.getElementById("formContainer")
			: document.getElementById("containerTime");

		if (targetEl) {
			targetEl.scrollIntoView({ behavior: "smooth" });
		}
	}, [formColabOpen]);

	return (
		<div className="App">
			<Banner />
			<div className="forms__container">
				<Form
					aoCadastro={aoNovoColaboradorCadastrado}
					formOpen={formColabOpen}
					fecharForm={() => setOpenColabForm(false)}
					times={times.map((time) => time.nome)}
					form2Open={() => {
						setOpenTimeForm(true);
					}}
				/>

				<Form
					tipo="adicionarTime"
					aoCadastro={aoCriarTime}
					form2Open={formTimeOpen}
					fecharForm={() => {
						setOpenTimeForm(false);
					}}
					excluirTimes={limparTimesVazios}
				/>
			</div>

			<Botao
				className={"btn__openForm"}
				onClick={() => setOpenColabForm(true)}
				style={{
					display: formColabOpen || formTimeOpen ? "none" : "block",
				}}>
				<PlusSquareIcon size={32} color="var(--cor-contraste)" />
			</Botao>

			<div className="minha__organizacao__container">
				<h3>Minha Organização:</h3>
				<div></div>
			</div>

			<Times colabs={colaboradores} times={times} deletarColab={deletarColab} />
			<Footer />
		</div>
	);
}

export default App;
