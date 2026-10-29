type FilterComponentProps = {
    setFilter: (filter: string) => void
}

export default function FilterComponent(props: Readonly<FilterComponentProps>) {
    return (
        <div className="filter-component">
            <input onChange={(e) => props.setFilter(e.target.value)}/>
        </div>

    )
}