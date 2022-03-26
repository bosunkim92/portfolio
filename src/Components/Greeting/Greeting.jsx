import {Grid, Card, Icon, Image} from "semantic-ui-react";
import profilePic from "../../media/profile.jpg";
import "./Greeting.css";
import resume from "../../media/resume.pdf";


export default function Greeting(){
    return (
        <>
        <Grid id="greeting-div">
            <Grid.Row>
                <Grid.Column style={{minWidth:200}}>
                    <Grid.Row>
                        <Image src={profilePic} avatar size="huge"/>

                    </Grid.Row>
                    <Grid.Row>
                        <h3 id="location">Greater Seattle, WA</h3>
                    </Grid.Row>
                    <Grid.Row id="profile-links">
                        <ul id="profile-link-ul">
                            <li className="profile-link-li">
                                <a href="https://github.com/bosunkim92" target="_blank" rel="noreferrer"><Icon name="github" size="big"/></a>
                            </li>
                            <li className="profile-link-li">
                                <a href="https://www.linkedin.com/in/rachel-bosun-kim/" target="_blank" rel="noreferrer"><Icon name="linkedin" size="big"/></a>
                            </li>
                            <li className="profile-link-li">
                                <a href="mailto:bosunkim92@gmail.com" target="_blank" rel="noreferrer"><Icon name="mail" size="big"/></a>
                            </li>
                            <li className="profile-link-li">
                                <a href={resume} target="_blank" rel="noreferrer"><Icon name="file pdf" size="big" /></a>
                            </li>
                        </ul>

                    </Grid.Row>
                </Grid.Column>

                    <Card id="greet">
                        <h2>Bosun (Rachel) Kim</h2>
                        <div id="job">
                            <h2>Full-Stack Software Developer</h2>
                            <h2>and</h2>
                            <h2>Software QA Engineer</h2>
                        </div>
                        <br />
                        <Card.Content>
                            <h3>Full stack software engineer and a QA engineer with a background in Biochemistry (M.S). I value the small details and love to bring my ideas into creation. I love how programming allows me to flex my analytical skills while still being creative. As a software engineer I look forward to learning more and teaching others as I grow.</h3>
                        </Card.Content>
                    </Card>

            </Grid.Row>

        </Grid>
        </>
    )
}