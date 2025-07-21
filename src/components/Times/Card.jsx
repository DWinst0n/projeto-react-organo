const Card = (p) => {
	const stringModif = (termo) => {
		return `${termo}-${p.nomeTime.toLowerCase().replaceAll(" ", "-")}`;
	};

	return (
		<div className="card">
			<div
				className="time__area"
				style={{
					backgroundColor: `var(--cor${stringModif("")})`,
				}}></div>
			<img src={p.foto} alt="Imagem do Colaborador" />
			<h4 className="nome__colaborador">{p.nome}</h4>
			<p className="cargo__colaborador">{p.cargo}</p>
		</div>
	);
};

export default Card;
