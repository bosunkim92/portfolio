import {Card, Grid} from "semantic-ui-react";
import LinkCard from "../LinkCard/LinkCard";
import doodleapImg from "../../media/doodleap.gif";
import planitImg from "../../media/PlanIt.gif";
import ghibligibberiImg from "../../media/ghibligibberi.gif";
import kikisdeliveryImg from "../../media/kikisdelivery.gif";
import "./RecentWork.css"


const workInfo = [
    {
        href: "https://doodleap.herokuapp.com/",
        header: "Doodleap",
        meta: "| MongoDB | ExpressJS | React | NodeJS |",
        description: "Doodleap lets people post pictures of their art and lets them view other peoples art.",
        image: doodleapImg
    },
    {
        href: "https://planit2.herokuapp.com/my_lists/",
        header: "PlanIt",
        meta: "| Django | Python | PostgreSQL | JavaScript | jQuery |",
        description: "A Full-Stack Django Application for adding activities or events and collaborating with others on times/places work best with their schedules.",
        image: planitImg
    },
    {
        href: "https://ghibligibberi.herokuapp.com/",
        header: "GhibliGibberi",
        meta: "| MongoDB | ExpressJS | Mongoose | NodeJS |",
        description: "GhibliGibberi is a website for Studio Ghibli movie lovers, it implements RESTful API that allows users to do full CRUD operation.",
        image: ghibligibberiImg
    },
    {
        href: "https://bosunkim92.github.io/kikis-delivery-game/",
        header: "Kiki's Delivery Game", 
        meta: "| HTML5 | CSS | JavaScript |",
        description: "Kiki's Delivery Service game has similar concept of Memory Matching game, which requires the player to find two cards that are related to each other.",
        image: kikisdeliveryImg
    }
]
export default function RecentWork(){
    return(
        <>
        <hr id="upper-break-line"/>
        <h3 id="recent-work-heading">RECENT WORKS</h3>
        <hr />
        <Grid id="recent-work-grid">
            <Card.Group className="recent-work" itemsPerRow={1}>
                {workInfo.map((work)=>{
                    return(
                        <LinkCard workInfo={work}/>
                    )
                })}
            </Card.Group>

        </Grid>
        </>
    )
}