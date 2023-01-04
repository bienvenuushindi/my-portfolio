const Title = (props) => {
    const {title} = props
    return (
        <h1 className="w-full  text-start py-5 text-gray  lg:text-5xl text-2xl font-extrabold uppercase mx-auto">{title}</h1>
    )
}

export default Title