import type { Meta, StoryObj } from "@storybook/react";
import Botao from ".";
import { IButtonProps } from "./iBotaoProps";

const meta = {
	title: "@components/Botao",
	component: Botao,
	tags: ["autodocs"],
} satisfies Meta<typeof Botao>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IButtonProps) => (
	<Botao {...args}>Rótulo</Botao>
);
Default.args = {
	...Default.args,
	label: "Cadastrar",
	className: "br-button primary mr-3",
	action: () => {
		alert("Cliquei!");
	},
};
