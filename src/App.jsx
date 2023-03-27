import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Route>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Route>
        </>
    );
}

export default App;
