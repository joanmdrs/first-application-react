const Button = ({classe, texto, acao}) => {
    return (
        <button type="button" className={classe} onClick={acao}>{texto}</button>
    )
}

export default Button