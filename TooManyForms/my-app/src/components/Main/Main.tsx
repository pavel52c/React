import "./Main.scss"
import mainInterface from "../../models/mainInterface";
import {Routers} from "../Routers/Routers";

export const Main = (props: mainInterface): JSX.Element => {
    const { filter } = props;
    const routersProps = {
        filter,
    }

    return (
        <main className="main">
            <Routers {...routersProps}/>
        </main>
    )
}