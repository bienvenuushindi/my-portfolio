import {TiTick} from "react-icons/ti";

const SkillCard = (props) => {
    const {title, items, name} = props
    const list = items.map((item, index) => <li key={`${name}-item-${index}`} className="flex items-baseline"><span className="text-tertiary"><TiTick /></span>{item}</li>)
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