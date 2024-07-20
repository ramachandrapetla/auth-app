const Loader = ({loadingText}) => {
    return (
        <div className="loading-wrapper">
            <div className="loader"></div>
            <div className="loading-text">{loadingText}</div>
        </div>
    )
}

export default Loader;