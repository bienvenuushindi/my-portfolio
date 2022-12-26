const ResumeItem = (props) => {
    const { item } = props
    return (
        <div>
            <div className="year w-fit font-semibold">{item.position}</div>
            <div className="year w-fit">{item.company}</div>
            <h6 className="year w-fit px-1  bg-black text-white text-sm">{item.year}</h6>
            <div className="field">{item.location}</div>
            {/*<div className="details">{item.details}</div>*/}
        </div>
    )
}

export default ResumeItem