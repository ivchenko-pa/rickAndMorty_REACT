import Character from "./Character.tsx";
import response from "./response.ts"

type CharactersCatalogProps = {
    filter:string
}

export default function CharactersCatalog(props:Readonly<CharactersCatalogProps>) {


    return (
            <div className="characters-container">
                {
                    response.filter((character) => character.name.toLowerCase().includes(props.filter.toLowerCase())).map((resp) =>
                        <Character
                            key={resp.id}
                            name={resp.name}
                            image={resp.image}
                            species={resp.species}
                            gender={resp.gender}
                            status={resp.status}
                        />)
                }
            </div>
    )

}