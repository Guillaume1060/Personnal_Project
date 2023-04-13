import ConcertItemForm from "./ConcertItemForm";
import classes from "./concertBox.module.scss"


const ConcertBox = (props) => {
    return (
        <div className={classes.ctn}>
            <div className={classes.ticket}>
                <p className={classes.ticket_date}>{props.date}</p>
                <p className={classes.ticket_venue}>{props.venue}</p>
                <p className={classes.ticket_support}>Support:{props.support}</p>
                <p className={classes.ticket_city}>{props.city}</p>
            </div>
            <div className={classes.ticketLink}>
                <div>
                    <ConcertItemForm id={props.id} venue={props.venue} date={props.date} city={props.city}/>
                </div> 
            </div>
        </div>
    )
}

export default ConcertBox