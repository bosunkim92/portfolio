import {Card} from "semantic-ui-react";
import "./LinkCard.css"

export default function LinkCard({workInfo}){
    return(
        <Card id="link-card"
            href={workInfo.href}
            header={workInfo.header}
            meta={workInfo.meta}
            description={workInfo.description}
            image={workInfo.image}
            />

    )
}