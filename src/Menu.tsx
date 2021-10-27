import { FunctionComponent } from "react";
const Menu :FunctionComponent = (props) =>{
    return (
        <span className="sticky fade-in-1s">
            {props.children}
        </span>
    )
}
export default Menu;


