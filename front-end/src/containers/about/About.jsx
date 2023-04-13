import classes from './about.module.scss'
import image from './mer.jpg'
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon'

const About = () => {
    return (
        <div id='about' className={classes.ctn}>
                <ArrowUpIcon/>
            <div className={classes.about}>
                <div className={classes.about_item_left}>
                    <h2>ABOUT</h2>
                    <img src={image} alt="sea" className={classes.img}/>
                </div>
                <div className={classes.about_item_right}>
                    <p>CARLA T is a singer-songwriter, guitarist and producer from Sardinia (Italy) based in Brussels. Her music is a melting pot of influences ranging from Soul and RnB to Trip Hop. Her songs are a deep trip into emotions and life experiences, colored by atmospheric guitars, enveloping synths, captivating grooves and her soulful voice.
                    </p>
                    <p>After her studies in Philosophy, Carla decided to dedicate her life to music.
                    </p>
                    <p>Carla played in several music projects as a vocalist, guitar player, composer and arranger. She is now launching her first solo project. Her debut album Tales of the borders is a collection of songs that tell stories about the physical and metaphysical boundaries between places, emotions, personalities and lives. In this first album, Carla harmoniously combines her sensitivity as a songwriter with her passion for electronic sounds.
                    </p>
                    <p>Inspired by the neosoul English vague of artists such as Jordan Rakei, Sault, Lianne La Havas, Tom Misch, Cleo Sol, in this first album Carla shows a very original universe and unique sound.
                    </p>
                </div>
            </div>
        </div>
    )
    
}



export default About