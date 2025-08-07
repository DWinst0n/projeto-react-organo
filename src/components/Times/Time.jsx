import Formas from "../animacoes/Formas";
import Card from "./Card";

const Time = ({ nomeTime, colabs }) => {
	const removerAcentos = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	const stringModif = (termo) => {
		return `${termo}-${removerAcentos(nomeTime.toLowerCase().replaceAll(" ", "-"))}`;
	};

	const corArea = `var(--cor${stringModif("")})`;
	const corFundo = `var(--fundo${stringModif("")})`;

	if (!colabs || colabs.length === 0) return null;

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: corFundo,
			}}>
			<Formas componente={"time"} cor={corArea} />
			<div className="time">
				<div className="nome__time__container">
					<h2 className="nome__time">{nomeTime}</h2>
					<div
						className="time__hr"
						style={{
							width: "5vw",
							border: `2px solid var(--cor${stringModif("")})`,
						}}></div>
				</div>
				<div className="colaboradores__time">
					{colabs.map((colab) => (
						<Card
							key={stringModif(colab.nome)}
							nome={colab.nome}
							nomeTime={colab.nomeTime}
							foto={colab.arquivo.dataUrl}
							cargo={colab.cargo}
							cor={corArea}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Time;
