import Time from "./Time";
import "./times.css";

const Times = ({ colabs, times }) => {
	return (
		<section className="times__container" id="containerTime">
			{times.map(({ nome, cor }) => (
				<Time
					key={"seção " + nome}
					colabs={colabs.filter((colab) => colab.nomeTime === nome)}
					nomeTime={nome}
					cor={cor}
				/>
			))}
		</section>
	);
};

export default Times;
