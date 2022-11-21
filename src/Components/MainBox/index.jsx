import InputField from "../InputField";
import { Left, Bold, Right, Row, Prices } from "./style";

function Box() {
    return (
        <Row>
            <Left>
                <h1>Simule sua Antecipação</h1>
                <InputField title="Informe o valor da venda *"></InputField>
                <InputField title="Em quantas parcelas *"></InputField>
                <InputField title="Informe o percentual de MDR *"></InputField>
            </Left>
            <Right>
                <div>
                    <h2>VOCÊ RECEBERÁ:</h2>
                    <hr></hr>
                </div>
                <Prices>
                    <span>Amanhã: <Bold>R$ 0,00</Bold></span>
                    <span>Em 15 dias: <Bold>R$ 0,00</Bold></span>
                    <span>Em 30 dias: <Bold>R$ 0,00</Bold></span>
                    <span>Em 90 dias: <Bold>R$ 0,00</Bold></span>
                </Prices>
            </Right>
        </Row>
    );
}

export default Box;