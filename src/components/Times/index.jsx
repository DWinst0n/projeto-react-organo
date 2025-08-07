import Time from "./Time";
import "./times.css";

const Times = ({ colabs, times }) => {
	return (
		<section className="times__container" id="containerTime">
			{times.map((time) => (
				<Time key={"seção " + time} colabs={colabs.filter((colab) => colab.nomeTime === time)} nomeTime={time} />
			))}
		</section>
	);
};

export default Times;
