const CampoForm = ({ dado, aoAlterado, obrigatorio, valor, times, tipo }) => {
	const placeholderModificada = `Digite seu ${dado.toLowerCase()}`;
	const id = `campo${dado}`;

	switch (tipo) {
		case "select":
			return (
				<div className="campo__form">
					<label htmlFor="selecionarCargo" className="dado__tipo">
						{dado}
					</label>
					<select
						onChange={(e) => aoAlterado(e.target.value)}
						required={obrigatorio}
						name=""
						id="selecionarCargo"
						className="form__select"
						value={valor}>
						<option value="" disabled>
							Selecione o time:
						</option>
						{(times || []).map((equipe, index) => (
							<option key={`campo-${index}-${equipe}`} value={equipe}>
								{equipe}
							</option>
						))}
					</select>
				</div>
			);
		case "cor":
			return (
				<div className="campo__form">
					<label htmlFor="selecionarCor" className="dado__tipo">
						{dado}
					</label>
					<input
						type="color"
						id="selecionarCor"
						className="form__cor"
						required={obrigatorio}
						value={valor}
						onChange={(e) => {
							aoAlterado(e.target.value);
						}}
					/>
				</div>
			);
		default:
			return (
				<div className="campo__form">
					<label htmlFor={id} className="dado__tipo">
						{dado}
					</label>
					<input
						value={valor}
						onChange={(e) => aoAlterado(e.target.value)}
						required={obrigatorio}
						placeholder={placeholderModificada}
						id={id}
						className="form__input"
					/>
				</div>
			);
	}
};

export default CampoForm;
