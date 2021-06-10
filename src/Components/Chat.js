import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const Chat = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const sendHandler = e => {
        e.preventDefault()
        setMessages(messages => [...messages, input])
        setInput('')
    }

    const renderMessages = messages => messages.map(message => <p key={uuidv4()}>{message}</p>)

    return(
        <div>
            <div>CHAT</div>
            <div>{renderMessages(messages)}</div>
            <form onSubmit={sendHandler}>
                <input onChange={e => setInput(e.target.value)} value={input}></input>
                <button type={'submit'}>SEND</button>
            </form>
        </div>
    )
}