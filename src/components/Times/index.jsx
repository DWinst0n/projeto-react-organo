import Time from "./Time";
import "./times.css";

const Times = ({ colabs, times }) => {
	return (
		<section className="times__container" id="containerTime">
			{times.map(({ nome, cor, fundo }) => (
				<Time
					key={"seção " + nome}
					colabs={colabs.filter((colab) => colab.nomeTime === nome)}
					nomeTime={nome}
					cores={{ primaria: cor, fundo: fundo }}
				/>
			))}
		</section>
	);
};

export default Times;
