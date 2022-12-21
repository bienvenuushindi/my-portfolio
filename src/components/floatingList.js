const FloatingList = (props) => {
    const { customClasses, icons, name } = props
    const list = icons.map((item, index) => <li key={`${name}-icon-${index}`}>{item}</li>)
    return (
        <ul className={`floating-navigation  ${customClasses}  shadow-dark shadow-lg  border-2 border-dark`}>
            {list}
        </ul>
    )
}

export default FloatingList