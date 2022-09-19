// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  //takes in a mesaage and logs it in the screen
  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("상담") || lowercase.includes("전화")) {
      this.actionProvider.messageHandler();
    } else if (
      lowercase.includes("계좌 개설") ||
      lowercase.includes("계좌") ||
      lowercase.includes("개설")
    ) {
      this.actionProvider.handleNewaccount();
    } else if (lowercase.includes("대출 안내") || lowercase.includes("대출")) {
      this.actionProvider.handleNewCardIssuance();
    } else if (
      lowercase.includes("잔액 조회") ||
      lowercase.includes("잔액") ||
      lowercase.includes("조회")
    ) {
      this.actionProvider.handleAccountInquiry();
    } else if (
      lowercase.includes("카카오뱅크") ||
      lowercase.includes("카뱅") ||
      lowercase.includes("뱅크")
    ) {
      this.actionProvider.handleGreeting();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}
export default MessageParser;
