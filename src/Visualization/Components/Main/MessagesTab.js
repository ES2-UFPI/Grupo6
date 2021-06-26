import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessagesTab = (props) => {
    const [openChat, setOpenChat] = useState(null);
    
    const openNewChat = (userId) => {
        // ...
        return {
            name: '',
            profilePicture: '',
        };
    };

    const chatNavigation = (
        <div className="chat-navigation">
            {props.users.map((user, index) => {
                return (
                    <div className="chat-preview" key={index} onClick={() => setOpenChat(user)}>
                        <div className="chat-preview-image-container">
                            <img src={user.profilePicture} alt={user.name} />
                        </div>
                        <span className="user-name-span">{user.name}</span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className={props.isOpen ? 'message-tab-icon' : 'message-tab-icon hidden'} onClick={() => props.toggleIsOpen()}>
            <div className="message-tab-header">
                {openChat !== null ? <button className="back-button" onClick={() => setOpenChat(null)}></button> : null}
                <span>{openChat === null ? 'Mensagens' : openChat.name}</span>
            </div>
            {openChat === null ? chatNavigation : null}
        </div>
    );
};

MessagesTab.propTypes = {
    isOpen: PropTypes.bool,
    toggleIsOpen: PropTypes.bool,
    users: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        profilePicture: PropTypes.string,
        messages: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.instanceOf(Date),
            content: PropTypes.string
        })),
    }),
};

export default MessagesTab;