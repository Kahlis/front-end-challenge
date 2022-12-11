import InputField from "../../Components/InputField";
import {
	Left,
	Bold,
	Right,
	Row,
	Prices,
	Header,
	SpanRow,
	StyledButton,
} from "./style";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

function Home() {
	const [amount, setAmount] = useState();
	const [installments, setInstallments] = useState();
	const [mdr, setMdr] = useState();
	const [days, setDays] = useState();
	const [response, setResponse] = useState();
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const defaultFields = [
		{ days: 1, value: 0 },
		{ days: 15, value: 0 },
		{ days: 30, value: 0 },
		{ days: 60, value: 0 },
	];

	const formatValue = (value) => {
		return parseInt(value).toFixed(2).replace(".", ",");
	};

	const trySimulate = () => {
		if (
			amount === undefined ||
			installments === undefined ||
			mdr === undefined
		) {
			toast.error("Todos os campos com asterisco são obrigatórios");
		} else if (amount < 1000) {
			toast.error("O valor da venda deve ser maior ou igual a 1.000");
		} else if (installments > 12 || installments < 0) {
			toast.error(
				"O número de parcelas deve ser positivo e menor ou igual a 12"
			);
		} else if (mdr > 100 || mdr < 0) {
			toast.error(
				"O percentual MDR deve ser positivo e menor ou igual a 100"
			);
		} else if (
			days &&
			days.split("").some((elem) => alphabet.split("").includes(elem))
		) {
			toast.error(
				"O campo de dias deve conter apenas números, vírgulas e espaços"
			);
		} else {
			const daysRequest = days
				? days.split(",").map((day) => parseInt(day.trim()))
				: [1, 15, 30, 90];

			toast
				.promise(
					api.post("", {
						amount: amount,
						installments: installments,
						mdr: mdr,
						days: daysRequest.sort(),
					}),
					{
						pending: "Calculando...",
						success: "Calculo finalizado",
						error: {
							render({ data }) {
								return data.response.data;
							},
						},
					}
				)
				.then((response) => {
					const res = Object.keys(response.data).map((key) => ({
						days: key,
						value: response.data[key],
					}));
					setResponse(res);
				});
		}
	};

	return (
		<>
			<Row>
				<Left>
					<h1>Simule sua Antecipação</h1>
					<InputField inputTypeIndex={0} setAmount={setAmount} />
					<InputField
						inputTypeIndex={1}
						setInstallments={setInstallments}
					/>
					<InputField inputTypeIndex={2} setMdr={setMdr} />
					<InputField inputTypeIndex={3} setDays={setDays} />
					<StyledButton onClick={trySimulate}>Calcular</StyledButton>
				</Left>
				<Right>
					<Header>
						<h2>VOCÊ RECEBERÁ:</h2>
						<hr></hr>
					</Header>
					<Prices>
						{response
							? response.map((day) => {
									return (
										<SpanRow key={day.days}>
											<span>
												{day.days === "1"
													? "Amanhã: "
													: "Em " +
													  day.days +
													  " dias: "}
											</span>
											<Bold>
												R$ {formatValue(day.value)}
											</Bold>
										</SpanRow>
									);
							  })
							: defaultFields.map((day) => {
									return (
										<SpanRow key={day.days}>
											<span>
												{day.days === "1"
													? "Amanhã: "
													: "Em " +
													  day.days +
													  " dias: "}
											</span>
											<Bold>
												R$ {formatValue(day.value)}
											</Bold>
										</SpanRow>
									);
							  })}
					</Prices>
				</Right>
			</Row>
		</>
	);
}

export default Home;
