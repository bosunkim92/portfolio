import {Card} from "semantic-ui-react";
import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css"

const skillList = ["HTML5/CSS", "JavaScript", "Express.js", "Node.js", "MongoDB", "Mongoose", "SQL", "Python3", "Django", "React"];

export default function Skills(){
    
    return(
        <>
            <h3 id="skill-intro">
                Here are list of my technical skills:
            </h3>
                        <Card.Group id="skill-cards">
                            {skillList.map((skill)=>{
                                return(
                                    <SkillCard skill={skill} />
                                )
                            })}
                        </Card.Group>
            </>
    )
}