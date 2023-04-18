/* eslint-disable jsx-a11y/iframe-has-title */
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './video.module.scss'


const Video = () => {
    return (
        <div id='video' className={classes.ctn}>
            <ArrowUpIcon/>
            <div className={classes.video}>
                <div className={classes.video_title}>
                    <h2>VIDEOS</h2>
                </div>
                <div className={classes.video_videos}>
                    <div className={classes.video_videos_1}>
                        {/* // TODO enlever texte & revoir design */}
                    {/* <iframe width="650" height="366 " src="https://www.youtube.com/embed/viC27zngBB0" title="Matt Corby - All Fired Up (Live Acoustic Cover)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <iframe width="650" height="366" src="https://www.youtube.com/embed/viC27zngBB0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <iframe id="player" type="text/html" width="640" height="360" src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" frameBorder="0" showinfo="0"></iframe> */}
                    <p>Matt Corby - All Fired Up (Live Acoustic Cover)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Video