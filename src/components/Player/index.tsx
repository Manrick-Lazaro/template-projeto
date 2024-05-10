interface PlayerProps {
	label: string;
	score: number;
	onIncrease: () => void;
	onDecrease: () => void;
}

const Player = ({ label, score, onIncrease, onDecrease }: PlayerProps) => (
	<div className="pl-6 pr-6 pb-3 border-solid-sm m-4 d-flex flex-column align-items-center justify-content-center">
		<h3>{label}</h3>
		<h4>{score}</h4>

		<div>
			<button
				className="m-2 pl-4 pr-4 pt-2 pb-2"
				onClick={onDecrease}
			>
				-
			</button>
			<button
				className="m-2 pl-4 pr-4 pt-2 pb-2"
				onClick={onIncrease}
			>
				+
			</button>
		</div>
	</div>
);

export default Player;
