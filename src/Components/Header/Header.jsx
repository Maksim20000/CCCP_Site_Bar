import css from './Header.module.css'
import {HeaderUp} from "./HeaderUnder/HeaderUp";
import {HeaderUnder} from "./HeaderUp/HeaderUnder";

export function Header() {
    return (
        <div className={css.headerDiv} >
            <div className={css.headerUpStyle}>
                <HeaderUp />
            </div>
            <div>
                <HeaderUnder />
            </div>
        </div>
    );
}