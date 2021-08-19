import {Segment, Card} from "semantic-ui-react";
import "./Greeting.css"


export default function Greeting(){
    return (
        <Card id="greet">
            <h2>Thank you for visiting my web page! 
                <br />
            My name is <span><h2>Bosun (Rachel) Kim</h2></span>and I am a <span><h2>Full-Stack Software Developer</h2></span></h2>
        </Card>
    )
}