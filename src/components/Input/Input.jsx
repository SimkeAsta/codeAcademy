export const Input = ({ onChange, label }) => {
    return (
        <>
            {label && <label data-testid="input-label" htmlFor="input">{label}</label>}
            <input id="input" onChange={onChange} />
        </>
    )
}