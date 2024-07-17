import shortid from "shortid"
import "./storybook.css"

const FormField = ({
    placeholder,
    onChange,
    label,
    type="text",
    required,
    value,
    name
}) => {
    const shortId = shortid.generate()
    return (
        <div className="form-field-wrapper">
            {
                label && 
                <div className="form-field-label">
                    <label htmlFor={shortId}>{label}</label>
                </div>
            }
            <div className="form-field">
                <input type={type} placeholder={placeholder} onChange={onChange} id={shortId} className="form-field-input" required={required} value={value} name={name}/>
                <p></p>
            </div>
        </div>
    )
}

export default FormField;