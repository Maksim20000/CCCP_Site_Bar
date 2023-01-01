import s from './NavBarHeader.module.css'
export function NavBarHeader() {
    return (
        <div className={s.flex}>
            <div>
                shop
                membership
                our story
            </div>
        </div>
    );
}