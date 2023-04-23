import classes from './home.module.scss'
import Button from '../../composants/button/Button';
import ListIcons from '../../composants/listIcons/ListIcons';
import NavBar from '../nav/NavBar_home';
import AlbumImage from '../../api/AlbumImg';


const Home = () => {

    return (
        <div id='home' className={classes.ctn} >
            <NavBar/>
                <div>
                    <AlbumImage albumId={1789} size="medium" />
                </div>
                <h1 className={classes.title}>CARLA T</h1>
                <div>
                    <h3 className={classes.heading}>
                        <span className={classes.heading_main}>TALES OF THE BORDERS</span>
                        <span className={classes.heading_sub}>DEBUT ALBUM</span>
                        <span className={classes.heading_sub}>OUT NOW</span>  
                    </h3>
                
                    <div className={classes.footer}>
                        <Button text={'LISTEN'}  />
                        <ListIcons color={'#E0E0D5'} />
                    </div>
                </div>
        </div>

    )
}


export default Home