export const GiffItem = ({url, title}) => {
    return (
        <div className="card">
            <img src={url} title={title} />
            <p>{title}</p>
        </div>
    )
}
