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
                    <div className="body">
                        <a>• Notificação do site.</a>
                    </div>
                </div>
                <div className="example2">
                    <div className="product-update">
                        <img src="https://i.imgur.com/1T9L1rV.png" alt="Brechonline" />
                    </div>
                    <div className="body">
                        <a>• O seu produto está a caminho, acompanhe com o código XSAI-ASXD-ASJD.</a>
                    </div>
                </div>
                <div className="example3">
                    <div className="message">
                        <img src="https://i.imgur.com/5g1fWb0.png" alt="Brechonline" />
                    </div>
                    <div className="body">
                        <a>• Você tem uma nova mensagem de Fulano.</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return <div className="notificationpage">{mainContent}</div>;
};

export default NotificationPage;