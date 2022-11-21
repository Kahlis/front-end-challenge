import { useEffect, useState } from "react";
import { api } from "../../services/api";
import InputField from "../InputField";
import { Left, Bold, Right, Row, Prices, Header, SpanRow } from "./style";

function Box() {
    const [amount, setAmount] = useState();
    const [installments, setInstallments] = useState();
    const [mdr, setMdr] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        if(amount !== undefined && installments !== undefined && mdr !== undefined) {
            api.post("", {
                amount: amount,
                installments: installments,
                mdr: mdr
            }).then((response) => {
                setResponse(response);
            })
        }
    }, [amount, installments, mdr])

    return (
        <Row>
            <Left>
                <h1>Simule sua Antecipação</h1>
                <InputField inputTypeIndex={0} setAmount={setAmount}/>
                <InputField inputTypeIndex={1} setInstallments={setInstallments}/>
                <InputField inputTypeIndex={2} setMdr={setMdr}/>
            </Left>
            <Right>
                <Header>
                    <h2>VOCÊ RECEBERÁ:</h2>
                    <hr></hr>
                </Header>
                <Prices>
                    <SpanRow><span>Amanhã: </span><Bold>R$ {(response) ? response.data["1"] : "0"},00</Bold></SpanRow>
                    <SpanRow><span>Em 15 dias: </span><Bold>R$ {(response) ? response.data["15"] : "0"},00</Bold></SpanRow>
                    <SpanRow><span>Em 30 dias: </span><Bold>R$ {(response) ? response.data["30"] : "0"},00</Bold></SpanRow>
                    <SpanRow><span>Em 90 dias: </span><Bold>R$ {(response) ? response.data["90"] : "0"},00</Bold></SpanRow>
                </Prices>
            </Right>
        </Row>
    );
}

export default Box;