import Time from "./Time";
import "./times.css";

const Times = ({ colabs, times, deletarColab }) => {
	return (
		<section className="times__container" id="containerTime">
			{times.map(({ nome, cor }) => (
				<Time
					key={"seção " + nome}
					colabs={colabs.filter((colab) => colab.nomeTime === nome)}
					nomeTime={nome}
					cor={cor}
					deletarColab={deletarColab}
				/>
			))}
		</section>
	);
};

export default Times;
