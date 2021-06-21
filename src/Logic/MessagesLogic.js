import Firebase from '../Data/Firebase';

const MessageLogic = (() => {
    const getMessages = async (chatId) => {
        return await Firebase.getChatMessages(chatId)
    }

    const sendMessage = async (chatId, userId, str) => {
        let messages = await Firebase.getChatMessages(chatId)
        const message = {
            sender: userId,
            text: str
        }
        messages.push(message)
        await Firebase.setChatMessages(chatId, messages)
    }

    const cleanConversation = async (chatId) => {
        await Firebase.deleteChat(chatId)
    }

    const createChat = async () => {
        const chatId = await Firebase.createChat()
        await Firebase.setChatMessages(chatId, [])
        return chatId
    }

    return {
        getMessages,
        sendMessage,
        cleanConversation,
        createChat
    }
})()

export default MessageLogic