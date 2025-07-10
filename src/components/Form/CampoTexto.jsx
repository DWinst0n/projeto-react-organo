export const CampoTexto = (p) => {
	const placeholderModificada = `Digite seu ${p.dado.toLowerCase()}`;
	const id = `campo${p.dado}`;
	return (
		<div className="campo__form">
			<label for={id} className="dado__tipo">
				{p.dado}
			</label>
			<input placeholder={placeholderModificada} id={id} className="form__input" />
		</div>
	);
};
