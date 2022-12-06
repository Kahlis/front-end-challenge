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
    const [response, setResponse] = useState();

    const formatCents = (cents) => {
        return (parseInt(cents) / 100).toFixed(2).replace(".", ",");
    };

    const trySimulate = () => {
        if (
            amount === undefined ||
            installments === undefined ||
            mdr === undefined
        ) {
            toast.error("Todos os campos são obrigatórios");
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
        } else {
            toast
                .promise(
                    api.post("", {
                        amount: amount,
                        installments: installments,
                        mdr: mdr,
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
                    setResponse(response);
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
                    <StyledButton onClick={trySimulate}>Calcular</StyledButton>
                </Left>
                <Right>
                    <Header>
                        <h2>VOCÊ RECEBERÁ:</h2>
                        <hr></hr>
                    </Header>
                    <Prices>
                        <SpanRow>
                            <span>Amanhã: </span>
                            <Bold>
                                R${" "}
                                {response
                                    ? formatCents(response.data["1"])
                                    : "0"}
                            </Bold>
                        </SpanRow>
                        <SpanRow>
                            <span>Em 15 dias: </span>
                            <Bold>
                                R${" "}
                                {response
                                    ? formatCents(response.data["15"])
                                    : "0"}
                            </Bold>
                        </SpanRow>
                        <SpanRow>
                            <span>Em 30 dias: </span>
                            <Bold>
                                R${" "}
                                {response
                                    ? formatCents(response.data["30"])
                                    : "0"}
                            </Bold>
                        </SpanRow>
                        <SpanRow>
                            <span>Em 90 dias: </span>
                            <Bold>
                                R${" "}
                                {response
                                    ? formatCents(response.data["90"])
                                    : "0"}
                            </Bold>
                        </SpanRow>
                    </Prices>
                </Right>
            </Row>
        </>
    );
}

export default Home;
