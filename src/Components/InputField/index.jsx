import { Input, Title, Vertical } from "./style";

function InputField({
	inputTypeIndex,
	setAmount,
	setInstallments,
	setMdr,
	setDays,
}) {
	const titles = [
		"Informe o valor da venda *",
		"Em quantas parcelas *",
		"Informe o percentual de MDR *",
		"Informe as datas para o cálculo",
	];

	const hints = ["ex: 1000", "ex: 12", "ex: 10", "ex: 1, 30, 90"];

	const sets = [setAmount, setInstallments, setMdr, setDays];

	return (
		<Vertical>
			<Title>{titles[inputTypeIndex]}</Title>
			<Input
				type={"text"}
				placeholder={hints[inputTypeIndex]}
				onChange={(field) => {
					sets[inputTypeIndex](field.target.value);
				}}
			></Input>
		</Vertical>
	);
}

export default InputField;
