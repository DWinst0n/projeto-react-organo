import Time from "./Time";
import "./times.css";

const Times = (p) => {
	const times = p.times;
	return (
		<section className="times__container" id="containerTime">
			{times.map((time) => (
				<Time key={"seção " + time} colabs={p.colabs.filter((colab) => colab.nomeTime === time)} nomeTime={time} />
			))}
		</section>
	);
};

export default Times;
