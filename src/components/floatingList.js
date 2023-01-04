const FloatingList = (props) => {
    const { customClasses, icons, name } = props
    const list = icons.map((item, index) => <li key={`${name}-icon-${index}`}>{item}</li>)
    return (
        <ul className={`floating-navigation navigation  ${customClasses}  shadow-dark shadow-lg  text-primary custom-shadow`}>
            {list}
        </ul>
    )
}

export default FloatingList