export interface IButtonProps {
	/** <br> Conteúdo do botão */
	label: string;

	/** <b>[OPCIONAL]</b> <br> Classes de estilização do componente */
	className?: string;

	/** <br> Ação que será disparada quando o botão for acionado */
	action: () => void;
}
