import style from './Menu.module.scss'

function Menu() {

    return (
        <div className={`container ${style.menuContainer}`}>
            <a href="#">Home</a>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                </li>
            </ul>
        </div>
    );
}

export default Menu;