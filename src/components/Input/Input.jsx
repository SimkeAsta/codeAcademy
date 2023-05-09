export const Input = ({ onChange }) => {
    return (
        <>
            <label htmlFor="input">Default label</label>
            <input id="input" onChange={onChange} />
        </>
    )
}