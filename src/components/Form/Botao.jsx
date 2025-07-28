const Botao = (p) => {
	return (
		<div>
			<button className={p.className} type={p.type} onClick={p.onClick} style={p.style}>
				{p.children}
			</button>
		</div>
	);
};

export default Botao;
