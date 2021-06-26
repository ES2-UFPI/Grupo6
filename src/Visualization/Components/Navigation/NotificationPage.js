import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/NotificationPage.css';

const NotificationPage = (props) => {
    
    const mainContent = (
        <div className="main">
            <div className="page-title">
                <h1>Notificações</h1>
            </div>
            <div className="notification-list">
                <div className="example1">
                    <div className="alert">
                        <img src="https://i.imgur.com/Np5JaD8.png" alt="Brechonline" />
                    </div>
                    <div className="content">
                        <a>• Notificação do site.</a>
                        <h1>13:20</h1>
                    </div>
                </div>
                <div className="example2">
                    <div className="product-update">
                        <img src="https://i.imgur.com/1T9L1rV.png" alt="Brechonline" />
                    </div>
                    <div className="content">
                        <a>• O seu produto está a caminho, acompanhe com o código XSAI-ASXD-ASJD.</a>
                        <h1>10:43</h1>
                    </div>
                </div>
                <div className="example3">
                    <div className="message">
                        <img src="https://i.imgur.com/bPxZOaN.png" alt="Brechonline" />
                    </div>
                    <div className="content">
                        <a>• Você tem uma nova mensagem de Fulano.</a>
                        <h1>08:19</h1>
                    </div>
                </div>
            </div>
        </div>
    );

    return <div className="notificationpage">{mainContent}</div>;
};

export default NotificationPage;