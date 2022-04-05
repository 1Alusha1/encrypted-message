import { useState } from "react"
import asyncMethod from "../async";
import style from './CreateMessage.module.css'

export default function CreateMessage() {
    const [message, setMessage] = useState('');
    const [key, setKey] = useState('')
    const [error, setError] = useState(false)
    const create = () => {
        if (message.length <= 15) {
            setError(true)
        }
        else {
            asyncMethod.createMessage(message, setKey)
            setMessage('')
            setError(!error)
        }
    }

    return <div className={style.createMessage}>
        <h1 className={style.title}>Создать сообщение</h1>

        {key !== '' ?
            <div className={style.messageKey}>
                <p>
                    Сообщение зашифровано, держи ключ: {key.key}
                </p>
                <p>
                    Сохрани ключ, ты его видишь в последний раз!
                </p>
                <a href="/read-message">Прочесть сообщение</a>
            </div>
            : ''
        }

        <div className={style.createMessageForm}>
            <input type="text" className={error ? style.error : ''} value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={() => create()}>Зашифровать</button>
        </div>
        {error && <p>Сообщение слишком короткое</p>}
    </div>
}