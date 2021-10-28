import { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
type MenuItemProps = {
    link :string,
    faIcon :IconDefinition,
}
const MenuItem :FunctionComponent<MenuItemProps> = (props) =>{
        return(
            <a href={props.link} target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={props.faIcon} className="text-color logo-size hover-button" />
            </a>
        )

}
export default MenuItem;