import Card from "./Card";

const Time = (p) => {
	const removerAcentos = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	const stringModif = (termo) => {
		return `${termo}-${removerAcentos(p.nomeTime.toLowerCase().replaceAll(" ", "-"))}`;
	};

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: `var(--fundo${stringModif("")})`,
			}}>
			<h2 className="nome__time">{p.nomeTime}</h2>
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
