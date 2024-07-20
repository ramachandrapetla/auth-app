import shortid from "shortid"
import "./storybook.css"

const FormField = ({
    label,
    error,
    className,
    ...rest
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
                <input id={shortId} className={`form-field-input ${className ? className : ""} ${error ? "error-outline" : ""}`}  {...rest}/>
                {error && error !== "" && <p className="form-field-error">{error}</p>}
            </div>
        </div>
    )
}

export default FormField;