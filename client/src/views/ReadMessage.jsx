import { useState } from "react"
import asyncMethod from "../async";
import style from './ReadMessage.module.css'

export default function ReadMessage() {
    const [key, setKey] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false)
    const getMessages = () => {
        if (key.length <= 12) {
            setError(true);
        }
        else {
            asyncMethod.getMessage(key, setMessage)
            setError(!error);
        }
    }
    return <div className={style.readMessage}>
        <h1>Прочесть сообщение</h1>

        <div className={style.readMessageForm}>
            <input type="text" className={error ? style.error : ''} onChange={(e) => setKey(e.target.value)} />
            <button onClick={getMessages}>Получить сообщение</button>
        </div>
        {error && <p>Ключ должен содержать 12 символов</p>}

        {message !== ""
            ?
            <div className={style.message}>
                Ваше сообщение : {message[0].message}
            </div>
            :
            ''
        }
    </div>
}