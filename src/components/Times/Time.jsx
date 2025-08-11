import { useState } from "react";
import tinycolor from "tinycolor2";
import Formas from "../animacoes/Formas";
import Card from "./Card";

const Time = ({ nomeTime, colabs, cor }) => {
	const [corDestaque, setCor] = useState(cor);

	const corFundo = tinycolor(corDestaque).lighten(20).toHexString();

	if (!colabs || colabs.length === 0) return null;

	return (
		<div
			className="container__time"
			style={{
				backgroundColor: corFundo,
			}}>
			<input
				type="color"
				className="input__cor"
				value={corDestaque}
				onChange={(e) => {
					setCor(e.target.value);
				}}
				style={{
					border: `5px double ${corDestaque}`,
				}}
			/>
			<Formas componente={"time"} cor={corDestaque} />
			<div className="time">
				<div className="nome__time__container">
					<h2 className="nome__time">{nomeTime}</h2>
					<div
						className="time__hr"
						style={{
							width: "5vw",
							border: `2px solid ${corDestaque}`,
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
							cor={corDestaque}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Time;
