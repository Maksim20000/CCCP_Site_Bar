import css from './Header.module.css'

export function HeaderUp() {
    return (
        <div className={ css.headerUpStyle }>
            Free shipping on orders over $50
        </div>
    );
}