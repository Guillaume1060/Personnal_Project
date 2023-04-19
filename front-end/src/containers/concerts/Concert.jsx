import ConcertBox from './ConcertBox';
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './concert.module.scss'
import useAxios from '../../hooks/use-axios';

const Concert = () => {
const { data, loading, error } = useAxios('http://localhost:5000/concerts');
if (loading) {
    return <div>Loading...</div>;
}
if (error) {
    return <div>Error: {error.message}</div>;
}
const concertsList = data.data.map(concert=><ConcertBox id={concert.id} key={concert.id} venue={concert.venue} support={concert.support} city={concert.city} date={concert.date} price={concert.price} />)
    return (
        <div id='concert' className={classes.ctn}>
            <ArrowUpIcon/>
            <div className={classes.concert}>
                <div className={classes.concert_title}>
                <h2>CONCERTS</h2>
                    <ul className={classes.concert_list}>
                        {concertsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Concert