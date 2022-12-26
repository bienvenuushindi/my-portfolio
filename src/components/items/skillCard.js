const SkillCard = (props) => {
    const {title, items, name} = props
    const list = items.map((item, index) => <li key={`${name}-item-${index}`}>{item}</li>)
    return (
        <li className="border-l-dotted border-b-dotted">
            <div className="card flex items-start justify-center">
                <div className="pt-4">
                    <div className="text-6xl font-bold">{title}</div>
                    <div className="py-2 px-4">
                        <ul className="grid grid-cols-2 grid-flow-row gap-1">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SkillCard