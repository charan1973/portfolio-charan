function Card({link, name, className}){
    return(
        <div className="pro-card">
            <a href={link} target="_blank" rel="noreferrer">
                <i className={`fab ${className}`}></i>
            </a>
            <p className="lean=d font-weight-bold">{name}</p>
        </div>
    )
}

export default Card;