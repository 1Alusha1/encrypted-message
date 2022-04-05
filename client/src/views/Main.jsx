import style from './Main.module.css'

export default function Main() {

    return <div className={style.main}>
        <h1 className={style.mainTitle}>Главаная</h1>
        <div className={style.mainText}>
            Это сервис для шифрования сообщений. С его помощью вы можете зашифровать сообщение и отправить ключ на это сообщение кому-либо
            С помощью ключа можете прочесть сообщение, но только один раз.
        </div>
        <div className={style.mainLink}>
            <a href="/create-message">Зашифровать сообщение</a>
            <a href="/read-message">Прочесть сообщение</a>
        </div>
    </div>
}