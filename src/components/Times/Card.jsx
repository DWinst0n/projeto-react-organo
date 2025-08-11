import { XIcon } from "@phosphor-icons/react";

const Card = ({ cor, foto, nome, cargo }) => {
	return (
		<div className="card">
			<div className="btnCard__container">
				<XIcon className="BtntExcluir__Card" color="white" />
			</div>
			<div
				className="time__area"
				style={{
					backgroundColor: cor,
				}}></div>
			<div className="dados__colaborador">
				<img src={foto} alt="Imagem do Colaborador" />
				<h4 className="nome__colaborador">{nome}</h4>
				<p className="cargo__colaborador">{cargo}</p>
			</div>
		</div>
	);
};

export default Card;
