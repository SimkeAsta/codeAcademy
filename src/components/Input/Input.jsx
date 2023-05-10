export const Input = ({ onChange, label, required }) => {
    return (
        <>
            {label && <label data-testid="input-label" htmlFor="input">{label}</label>}
            <input id="input" onChange={onChange} required={required} />
        </>
    )
}