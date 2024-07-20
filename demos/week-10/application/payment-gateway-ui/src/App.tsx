import Menu from "./components/Menu/Menu";
import "./App.css";

interface Props {
    title: string;
    x?: number;
}

function App(props: Props) {
    console.log(props);
    return (
        <>
            <div className="app">
                <h1 className="app-title">{props.title}</h1>
                <Menu />
            </div>
        </>
    );
}

export default App;
