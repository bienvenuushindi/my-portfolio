const SkillCard = ({title, items, name}) => {
    const list = items.map((item, index) => <li key={`${name}-item-${index}`} className="flex items-baseline">
        <div className="wrapper mr-1">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check font-bold" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        </div>
        {item}
    </li>)
    return (
        <li className="border-b-dotted border-l-dotted">
            <div className="card flex ">
                <div>
                    <div className="lg:text-4xl text-2xl font-bold text-left text-primary">{title}</div>
                    <div className="py-2">
                        <ul className="grid grid-cols-2 items-start justify-start grid-flow-row gap-1  text-left">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SkillCard