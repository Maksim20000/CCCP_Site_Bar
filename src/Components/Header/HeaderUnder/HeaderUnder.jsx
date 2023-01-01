import {NavBarHeader} from "./NavBarHeader/NavBarHeader";
import {InformationHeader} from "./InformationHeader/InformationHeader";

export function HeaderUnder() {
    return (
        <div>
            <div>
                <NavBarHeader />
            </div>
            <div>
                <InformationHeader />
            </div>
        </div>
    );
}