const chatModel = require('../models/chatsmodel')


class ChatsManager {

    sendMessage = async (message) => {
        try {
            const saveMessage = await chatModel.create(message)
            return saveMessage
        } catch (error) {
            return { msg: 'No se pudo Grabar el Mensaje' }
        }
    }

    getMessage = async () => {
        try {
            const messages = await chatModel.find()
            return messages
        } catch (error) {
            return { msg: 'No se pudo Mostrar el mensaje' }
        }
    }

    deleteMessage = async (id) => {
        try {
            const deleteMj = await chatModel.findByIdAndDelete(id)
            return deleteMj
        } catch (error) {
            return { msg: 'No se pudo Mostrar el mensaje' }
        }
    }

}

module.exports = ChatsManager