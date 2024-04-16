import { IButtonProps } from "./iBotaoProps";
import "./styles.css";

export default function Botao({ action, label, className }: IButtonProps) {
	return (
		<>
			<button
				className={className}
				onClick={action}
			>
				{label}
			</button>
		</>
	);
}
