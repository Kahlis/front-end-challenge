import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import { Vertical } from "./Components/InputField/style";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Vertical>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </Vertical>
    );
}

export default App;
