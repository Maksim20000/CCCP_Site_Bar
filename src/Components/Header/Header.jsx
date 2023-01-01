import css from './Header.module.css'
import {HeaderUp} from "./HeaderUp/HeaderUp";
import {HeaderUnder} from "./HeaderUnder/HeaderUnder";

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