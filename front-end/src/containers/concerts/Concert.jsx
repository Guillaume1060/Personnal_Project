import ConcertBox from './ConcertBox';
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import DUMMY_MEALS from '../../data/DUMMY_concerts';
import classes from './concert.module.scss'


const Concert = () => {
const concerts = DUMMY_MEALS //  TODO ici fetch des concerts
const concertsList = concerts.map(concert=><ConcertBox id={concert.id} key={concert.id} venue={concert.venue} support={concert.support} city={concert.city} date={concert.date} />)

    return (
        <div id='concert' className={classes.ctn}>
            <ArrowUpIcon/>
            <div className={classes.concert}>
                <div className={classes.concert_title}>
                <h2>CONCERTS</h2>
                    <ul>
                        {concertsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Concert