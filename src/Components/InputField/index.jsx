import { Input, Title, Vertical } from "./style";

function InputField({ inputTypeIndex, setAmount, setInstallments, setMdr }) {
    const titles = [
        "Informe o valor da venda *",
        "Em quantas parcelas *",
        "Informe o percentual de MDR *"
    ]
    
    const sets = [setAmount, setInstallments, setMdr]

    return (
        <Vertical>
            <Title>{titles[inputTypeIndex]}</Title>
            <Input type={"number"} onChange={(field) => { sets[inputTypeIndex](field.target.value) }}></Input>
        </Vertical>
    );
}

export default InputField;