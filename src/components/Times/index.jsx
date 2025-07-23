import Time from "./Time";
import "./times.css";

const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

const Times = (p) => {
	return (
		<section className="times__container">
			{times.map((time) => (
				<Time key={"seção " + time} colabs={p.colabs.filter((colab) => colab.nomeTime === time)} nomeTime={time} />
			))}
		</section>
	);
};

export default Times;
