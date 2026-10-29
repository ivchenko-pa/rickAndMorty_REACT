import Character from "./Character.tsx";
import response from "./response.ts"

type CharactersCatalogProps = {
    filter:string
}

export default function CharactersCatalog(props:Readonly<CharactersCatalogProps>) {


    return (
            <div className="CharactersContainer">
                {
                    response.filter((response) => response.name.toLowerCase().startsWith(props.filter.toLowerCase())).map((resp) =>
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