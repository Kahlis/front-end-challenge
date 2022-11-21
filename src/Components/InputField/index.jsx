import { Input, Title, Vertical } from "./style";

function InputField({ title }) {
    return (
        <Vertical>
            <Title>{title}</Title>
            <Input></Input>
        </Vertical>
    );
}

export default InputField;