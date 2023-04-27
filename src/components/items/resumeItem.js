const ResumeItem = ({item}) => {
    return (
        <div>
            <div className="year w-fit  lg:text-2xl">{item.position}</div>
            <div className="year w-fit font-bold">{item.company}</div>
            <h6 className="year w-fit px-1  bg-secondary text-tertiary text-sm font-bold">{item.year}</h6>
            <div className="field font-bold">{item.location}</div>
        </div>
    )
}

export default ResumeItem