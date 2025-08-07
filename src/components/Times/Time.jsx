import Formas from "../animacoes/Formas";
import Card from "./Card";

const Time = ({ nomeTime, colabs, cores }) => {
	if (!colabs || colabs.length === 0) return null;

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: cores.fundo,
			}}>
			<Formas componente={"time"} cor={cores.primaria} />
			<div className="time">
				<div className="nome__time__container">
					<h2 className="nome__time">{nomeTime}</h2>
					<div
						className="time__hr"
						style={{
							width: "5vw",
							border: `2px solid ${cores.primaria}`,
						}}></div>
				</div>
				<div className="colaboradores__time">
					{colabs.map((colab) => (
						<Card
							key={`${nomeTime} - colaborador ${colab.cargo} - ${colab.nome}`}
							nome={colab.nome}
							nomeTime={colab.nomeTime}
							foto={colab.arquivo.dataUrl}
							cargo={colab.cargo}
							cor={cores.primaria}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Time;
