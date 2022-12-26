const Title = (props) => {
    const {title} = props
    return (
        <h1 className="w-full text-center py-5 px-8 border-dotted border border-gray-dark lg:text-5xl text-3xl font-extrabold uppercase mx-auto">{title}</h1>
    )
}

export default Title