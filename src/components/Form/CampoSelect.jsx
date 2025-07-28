const CampoSelect = (p) => {
	const aoSelecionado = (e) => {
		p.aoAlterado(e.target.value);
	};

	return (
		<div className="campo__form">
			<label htmlFor="selecionarCargo" className="dado__tipo">
				{p.dado}
			</label>
			<select
				onChange={aoSelecionado}
				required={p.obrigatorio}
				name=""
				id="selecionarCargo"
				className="form__select"
				value={p.valor}>
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
