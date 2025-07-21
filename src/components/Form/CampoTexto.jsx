const CampoTexto = (p) => {
	const placeholderModificada = `Digite seu ${p.dado.toLowerCase()}`;
	const id = `campo${p.dado}`;

	const aoDigitado = (e) => {
		p.aoAlterado(e.target.value);
	};

	return (
		<div className="campo__form">
			<label htmlFor={id} className="dado__tipo">
				{p.dado}
			</label>
			<input
				value={p.valor}
				onChange={aoDigitado}
				required={p.obrigatorio}
				placeholder={placeholderModificada}
				id={id}
				className="form__input"
			/>
		</div>
	);
};

export default CampoTexto;
