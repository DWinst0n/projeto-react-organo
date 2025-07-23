const Card = (p) => {
	const removerAcentos = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	const stringModif = (termo) => {
		return `${termo}-${removerAcentos(p.nomeTime.toLowerCase().replaceAll(" ", "-"))}`;
	};

	return (
		<div className="card">
			<div
				className="time__area"
				style={{
					backgroundColor: `var(--cor${stringModif("")})`,
				}}></div>
			<div className="dados__colaborador">
				<img src={p.foto} alt="Imagem do Colaborador" />
				<h4 className="nome__colaborador">{p.nome}</h4>
				<p className="cargo__colaborador">{p.cargo}</p>
			</div>
		</div>
	);
};

export default Card;
