import Card from "./Card";

const Time = (p) => {
	const removerAcentos = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	const stringModif = (termo) => {
		return `${termo}-${removerAcentos(p.nomeTime.toLowerCase().replaceAll(" ", "-"))}`;
	};

	if (!p.colabs || p.colabs.length === 0) return null;

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: `var(--fundo${stringModif("")})`,
			}}>
			<div className="nome__time__container">
				<h2 className="nome__time">{p.nomeTime}</h2>
				<div
					className="time__hr"
					style={{
						width: "5vw",
						border: `2px solid var(--cor${stringModif("")})`,
					}}></div>
			</div>
			<div className="colaboradores__time">
				{p.colabs.map((colab) => (
					<Card
						key={stringModif(colab.nome)}
						nome={colab.nome}
						nomeTime={colab.nomeTime}
						foto={colab.arquivo.dataUrl}
						cargo={colab.cargo}
					/>
				))}
			</div>
		</div>
	);
};

export default Time;
