type FilterComponentProps = {
    setFilter: (filter: string) => void
}

export default function FilterComponent(props: Readonly<FilterComponentProps>) {
    return (
        <div className="FilterComponent">
            <input onChange={(e) => props.setFilter(e.target.value)}/>
        </div>

    )
}