import Header from "./Header.tsx";
import CharactersCatalog from "./CharactersCatalog.tsx";
import FilterComponent from "./FilterComponent.tsx";
import {useState} from "react";

function App() {

    const [filter, setFilter] = useState("")

    return (
        <>
            <Header/>
            <FilterComponent setFilter={setFilter}/>
            <CharactersCatalog filter={filter}/>
        </>
    )
}

export default App
