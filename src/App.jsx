import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
	const [colaboradores, setColaboradores] = useState([]);

	const aoNovoColaboradorCadastrado = (colaborador) => {
		JSON.stringify(colaborador);
		console.log(colaborador);
		setColaboradores([...colaboradores, colaborador]);
		console.log(colaboradores);
	};

	return (
		<div className="App">
			<Banner />
			<Form aoCadastro={(colaborador) => aoNovoColaboradorCadastrado(colaborador)} />
			<div className="minha__organizacao__container">
				<h3>Minha Organização:</h3>
				<div></div>
			</div>
		</div>
	);
}

export default App;
