import style from './Header.module.css'

export default function Header() {
    return <div className={style.header}>
        <div className={style.headerLogo}>
            <a href="/">Logo</a>
        </div>
        <nav className='navbar'>
            <ul className={style.navbarList}>
                <li><a href="/create-message">Создать сообщение</a></li>
                <li><a href="/read-message">Прочесть сообщение</a></li>
            </ul>
        </nav>
    </div>
}