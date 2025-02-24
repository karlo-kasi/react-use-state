
const Cards = ({ title, description }) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-text">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Cards