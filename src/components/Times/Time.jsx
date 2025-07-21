import Card from "./Card";

const Time = (p) => {
	const stringModif = (termo) => {
		return `${termo}-${p.nomeTime.toLowerCase().replaceAll(" ", "-")}`;
	};

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: `var(--cor${stringModif("")})`,
				opacity: 0.75,
			}}>
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
	);
};

export default Time;
