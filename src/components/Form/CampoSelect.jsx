const CampoSelect = (p) => {
	return (
		<div className="campo__form">
			<label htmlFor="selecionarCargo" className="dado__tipo">
				{p.dado}
			</label>
			<select required={p.obrigatorio} name="" id="selecionarCargo" className="form__select" defaultValue="">
				<option value="" disabled>
					Selecione o time:
				</option>
				{p.times.map((equipe) => (
					<option key={equipe} value={equipe}>
						{equipe}
					</option>
				))}
			</select>
		</div>
	);
};

export default CampoSelect;
