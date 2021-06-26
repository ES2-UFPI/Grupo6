import React, { useState } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const Chat = (props) => {
    const [messageInput, setMessageInput] = useState('');

    return (
        <div className="chat">
            <div className="message-log">
                {props.messages.map((message, index) => {
                    return (
                        <Message key={index} content={message.content} date={message.date} delete={() => props.deleteMessage(message.id)} />
                    );
                })}
            </div>
            <div className="composing-area">
                <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)}></input>
                <button className="send-button" onClick={() => props.sendMessage(messageInput)}></button>
            </div>
        </div>
    );
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        content: PropTypes.string
    })),
    sendMessage: PropTypes.func,
    deleteMessage: PropTypes.func,
};

export default Chat;