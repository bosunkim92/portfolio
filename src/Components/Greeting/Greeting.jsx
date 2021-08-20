import {Grid, Card, Icon, Image} from "semantic-ui-react";
import profilePic from "../../media/profile.jpg";
import "./Greeting.css";


export default function Greeting(){
    return (
        <>
        <Grid id="greeting-div">
            <Grid.Row>
                <Grid.Column style={{minWidth:150}}>
                    <Grid.Row>
                        <Image src={profilePic} avatar size="huge"/>

                    </Grid.Row>
                    <Grid.Row>
                        <ul id="profile-link-ul">
                            <li className="profile-link-li">
                                <a href="https://github.com/bosunkim92"><Icon name="github" size="big"/></a>
                            </li>
                            <li className="profile-link-li">
                                <a href="https://www.linkedin.com/in/rachel-bosun-kim/"><Icon name="linkedin" size="big"/></a>
                            </li>
                            <li className="profile-link-li">
                                <a href="mailto:bosunkim92@gmail.com"><Icon name="mail" size="big"/></a>
                            </li>
                        </ul>

                    </Grid.Row>
                </Grid.Column>

                    <Card id="greet">
                        <h2>Thank you for visiting my web page! 
                            <br />
                        My name is <span><h2>Bosun (Rachel) Kim</h2></span>and I am a <span><h2>Full-Stack Software Developer</h2></span></h2>
                    </Card>

            </Grid.Row>

        </Grid>
        </>
    )
}