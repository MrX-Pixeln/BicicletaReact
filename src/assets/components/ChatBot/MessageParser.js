class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const trimmed = message.toLowerCase().trim();
    this.actionProvider.defaultResponse(trimmed);
  }
}

export default MessageParser;
