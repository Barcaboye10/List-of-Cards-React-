const Card = ({food, cal}) => {

    return(
        <div className = "container">
            <div className = "Card">
                <h1>{ food || "Pizza" }</h1>
                <p>You have consumed <span className = "Cals"> { cal || 69 } </span> cals today</p>
            </div>
        </div>
    );
}
export default Card;