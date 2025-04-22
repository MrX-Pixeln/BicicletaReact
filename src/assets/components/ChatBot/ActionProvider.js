class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleSuporte = () => {
    const message = this.createChatBotMessage(
      "Claro! Vamos falar sobre suporte técnico."
    );
    this.addMessageToState(message);
  };

  handleEscolhaBike = () => {
    const message = this.createChatBotMessage(
      "Legal! Vamos te ajudar a escolher uma bike."
    );
    this.addMessageToState(message);
  };

  handleAcompanharPedido = () => {
    const message = this.createChatBotMessage(
      "Vamos verificar o status do seu pedido."
    );
    this.addMessageToState(message);
  };

  handleFalarComAtendente = () => {
    const message = this.createChatBotMessage(
      "Encaminhando você para um atendente..."
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
