const ResumeItem = (props) => {
    const { item } = props
    return (
        <div>
            <div className="year w-fit font-bold">{item.position}</div>
            <div className="year w-fit">{item.company}</div>
            <h6 className="year w-fit px-1  bg-secondary text-tertiary text-sm font-bold">{item.year}</h6>
            <div className="field">{item.location}</div>
        </div>
    )
}

export default ResumeItem