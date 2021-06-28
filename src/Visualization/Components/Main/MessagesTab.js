import React, { useState, useRef, useEffect } from 'react';
import Chat from './Chat';
import MessageLogic from '../../../Logic/MessageLogic';
import UserLogic from '../../../Logic/UserLogic';
import PropTypes from 'prop-types';
import '../Styles/MessagesTab.css';
import ProductLogic from '../../../Logic/ProductLogic';
import CouponsLogic from '../../../Logic/CouponsLogic';

const MessagesTab = (props) => {
	const overflowContent = useRef();
	const couponModal = useRef();
	const [openChat, setOpenChat] = useState(null);
	const [users, setUsers] = useState([]);
	const [userProducts, setUserProducts] = useState([]);
	const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
	const [couponValueInput, setCouponValueInput] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState('');

	useEffect(() => {
		window.addEventListener('click', (e) => {
			if (
				couponModal.current !== undefined &&
				couponModal.current !== null &&
				!couponModal.current.contains(e.target)
			) {
				setIsCouponModalOpen(false);
			}
		});
	}, []);

	useEffect(() => {
		const updateUsers = async (messagesObject) => {
			const messages = Object.keys(messagesObject).map((key) => {
				return {
					id: key,
					sender: messagesObject[key].sender,
					receiver: messagesObject[key].receiver,
					content: messagesObject[key].content,
					date: new Date(messagesObject[key].date.seconds * 1000),
				};
			});

			const preliminaryUsers = messages
				.sort((a, b) => a.date - b.date)
				.reduce((userArray, message) => {
					if (
						message.sender !== props.loggedInUser &&
						userArray.filter((user) => user.id === message.sender).length === 0
					) {
						return userArray.concat({
							id: message.sender,
							messages: messages
								.filter(
									(m) =>
										m.sender === message.sender || m.receiver === message.sender
								)
								.sort((a, b) => a.date - b.date)
								.map((m) => {
									return {
										id: m.id,
										content: m.content,
										date: m.date,
										isSentByLoggedInUser: m.receiver !== props.loggedInUser,
									};
								}),
						});
					}
					if (
						message.receiver !== props.loggedInUser &&
						userArray.filter((user) => user.id === message.receiver).length ===
							0
					) {
						return userArray.concat({
							id: message.receiver,
							messages: messages
								.filter(
									(m) =>
										m.receiver === message.receiver ||
										m.sender === message.receiver
								)
								.sort((a, b) => a.date - b.date)
								.map((m) => {
									return {
										id: m.id,
										content: m.content,
										date: m.date,
										isSentByLoggedInUser: m.receiver !== props.loggedInUser,
									};
								}),
						});
					}
					return userArray;
				}, []);
			setUsers(
				await Promise.all(
					preliminaryUsers.map(async (user) => {
						const userInfo = await UserLogic.getUser(user.id);
						return {
							...user,
							name: userInfo.name + ' ' + userInfo.surname,
							profilePicture: userInfo.profilePicture,
						};
					})
				)
			);
		};

		if (props.loggedInUser !== null) {
			MessageLogic.getMessagesForUser(props.loggedInUser, updateUsers);
		}
	}, [props.loggedInUser]);

	useEffect(() => {
		const fetchUserProducts = async () => {
			setUserProducts(
				await ProductLogic.getProductsForUser(props.loggedInUser)
			);
		};
		fetchUserProducts();
	}, [props.loggedInUser]);

	useEffect(() => {
		if (
			props.newChat !== null &&
			!users.map((user) => user.id).includes(props.newChat.id)
		) {
			setOpenChat({
				id: props.newChat.id,
				name: props.newChat.name,
				messages: [],
			});
		} else if (props.newChat !== null) {
			setOpenChat(users.filter((user) => user.id === props.newChat.id)[0]);
		} else {
			setOpenChat((previous) =>
				previous !== null
					? users.filter((user) => user.id === previous.id)[0]
					: previous
			);
		}
	}, [users, props.newChat]);

	const createAndSendCoupon = async () => {
		if (selectedProduct.length > 0 && couponValueInput > 0) {
			const couponId = await CouponsLogic.createCoupon(
				selectedProduct,
				couponValueInput,
				openChat.id
			);
			MessageLogic.sendMessage(props.loggedInUser, openChat.id, couponId);
			setIsCouponModalOpen(false);
		}
	};

	const chatNavigation = (
		<div className="chat-navigation">
			{users.map((user, index) => {
				return (
					<div
						className="chat-preview"
						key={index}
						onClick={() => setOpenChat(user)}
					>
						<div className="chat-preview-image-container">
							<img src={user.profilePicture} alt={user.name} />
						</div>
						<span className="user-name-span">{user.name}</span>
					</div>
				);
			})}
		</div>
	);

	const generateCouponModal = (
		<div
			className={
				isCouponModalOpen
					? 'generate-coupon-modal'
					: 'generate-coupon-modal hidden'
			}
		>
			<span>Gerar cupom</span>
			<div className="value-row">
				<label htmlFor="coupon-value">Novo preço: </label>
				<input
					type="number"
					name="coupon-value"
					value={couponValueInput}
					onChange={(e) => setCouponValueInput(e.target.value)}
				></input>
			</div>
			<div className="product-row">
				<label htmlFor="product">Produto: </label>
				<select
					value={selectedProduct}
					onChange={(e) => setSelectedProduct(e.target.value)}
				>
					<option value=""></option>
					{userProducts.map((product, index) => {
						return (
							<option key={index} value={product.id}>
								{product.name}
							</option>
						);
					})}
				</select>
			</div>
			<button
				className="generate-new-coupon-button"
				onClick={createAndSendCoupon}
			>
				Gerar e enviar
			</button>
		</div>
	);

	return (
		<div
			className={
				props.isOpen || props.newChat
					? 'message-tab-icon fa fa-envelope'
					: 'message-tab-icon fa fa-envelope hidden'
			}
			onClick={(e) => {
				if (!overflowContent.current.contains(e.target)) {
					props.toggleIsOpen();
				}
			}}
		>
			<div className="overflow-content" ref={overflowContent}>
				<div className="message-tab-header">
					{openChat !== null && openChat !== undefined ? (
						<button
							className="back-button fa fa-arrow-left"
							onClick={() => setOpenChat(null)}
						></button>
					) : null}
					<span>
						{openChat === null || openChat === undefined
							? 'Mensagens'
							: openChat.name}
					</span>
					{openChat !== null && openChat !== undefined ? (
						<span
							ref={couponModal}
							className="coupon-span fa fa-money"
							onClick={() => setIsCouponModalOpen(true)}
						>
							{generateCouponModal}
						</span>
					) : null}
				</div>
				{openChat === null || openChat === undefined ? (
					chatNavigation
				) : (
					<Chat
						messages={openChat.messages}
						sendMessage={(newMessage) =>
							MessageLogic.sendMessage(
								props.loggedInUser,
								openChat.id,
								newMessage
							)
						}
						deleteMessage={(messageId) => MessageLogic.deleteMessage(messageId)}
					/>
				)}
			</div>
		</div>
	);
};

MessagesTab.propTypes = {
	newChat: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
	}),
	isOpen: PropTypes.bool,
	toggleIsOpen: PropTypes.func,
	loggedInUser: PropTypes.string,
};

export default MessagesTab;
