
import IconFcb from "./icons/Icons/FacebookIcon";
import IconInsta from "./icons/Icons/InstagramIcon";
import IconSpotify from "./icons/Icons/SpotifyIcon";
import IconYoutube from "./icons/Icons/YoutubeIcon";
import classes from "./listIcons.module.scss"


const ListIcons = (props) => {
    return (
        <div className={classes.ctn} >
            {/* SITE POUR TRANSFORMER */}
            {/* https://svg2jsx.com/ */}
            <IconFcb color={props.color} />
            <IconInsta color={props.color}/>
            <IconSpotify color={props.color}/>
            <IconYoutube color={props.color}/>
        </div>
    )
}

export default ListIcons