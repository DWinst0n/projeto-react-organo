import { useState } from "react";

export const CampoArquivo = ({ onChange }) => {
	const [preview, setPreview] = useState(null);
	const [fileName, setFileName] = useState("Insira uma foto");

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFileName(file.name);

			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
				if (onChange) onChange(file);
			};
			reader.readAsDataURL(file);
		} else {
			setFileName("Insira uma foto");
			setPreview(null);
		}
	};

	return (
		<div className="campo__form">
			<label htmlFor="fileInput" className="file__upload">
				Imagem
				<span className="nome__arquivo">{fileName}</span>
			</label>
			<input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />

			{preview && (
				<div>
					<img
						src={preview}
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
