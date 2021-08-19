import {Card} from "semantic-ui-react";
import "./SkillCard.css"

export default function SkillCard({skill}){
    return(
        <Card id="skill-list">
            <Card.Content textAlign="center">
                <Card.Header>
                    {skill}
                </Card.Header>

            </Card.Content>
        </Card>
    )
}