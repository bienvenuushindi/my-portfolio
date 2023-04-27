const ResumeItem = ({item}) => {
    return (
        <div>
            <div className=" w-fit lg:text-2xl text-white">{item.position}</div>
            <div className=" text-primary w-fit font-bold">{item.company}</div>
            <h6 className=" w-fit px-1  bg-secondary text-tertiary text-sm font-bold">{item.year}</h6>
            <div className="text-primary font-bold">{item.location}</div>
        </div>
    )
}

export default ResumeItem