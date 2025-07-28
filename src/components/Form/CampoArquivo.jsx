import { useState, useEffect, useRef } from "react";

const CampoArquivo = (p) => {
	const [previa, setPrevia] = useState(null);
	const [nomeArquivo, setnomeArquivo] = useState("Insira uma foto");
	const inputRef = useRef();

	useEffect(() => {
		if (!p.valor || !p.valor.name) {
			setnomeArquivo("Insira uma foto");
			setPrevia(null);
			if (inputRef.current) inputRef.current.value = "";
		}
	}, [p.valor]);

	const inserirArquivo = (e) => {
		const arquivo = e.target.files[0];
		if (arquivo) {
			setnomeArquivo(arquivo.name);
			const leitor = new FileReader();
			leitor.onloadend = () => {
				setPrevia(leitor.result);
				arquivo.dataUrl = leitor.result;
				p.aoAlterado(arquivo);
			};
			leitor.readAsDataURL(arquivo);
		} else {
			setnomeArquivo("Insira uma foto");
			setPrevia(null);
		}
	};

	return (
		<div className="campo__form">
			<label htmlFor="fileInput" className="file__upload">
				Imagem
				<span className="nome__arquivo">{nomeArquivo}</span>
			</label>
			<input
				type="file"
				id="fileInput"
				accept="image/*"
				onChange={inserirArquivo}
				style={{ display: "none" }}
				ref={inputRef}
			/>
			{previa && (
				<div>
					<img
						src={previa}
						alt="Prévia"
						style={{
							width: "100px",
							height: "100px",
							marginTop: "1rem",
							objectFit: "cover",
							objectPosition: "top",
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default CampoArquivo;
