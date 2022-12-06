import { useNavigate } from "react-router";
import { Box } from "./style";

function Error404() {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    return (
        <Box>
            <h1>404</h1>
            <p>Esta página não foi encontrada</p>
            <span onClick={backToHome}>Voltar para página inicial</span>
        </Box>
    );
}

export default Error404;
