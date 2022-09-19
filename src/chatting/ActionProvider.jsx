// ActionProvider starter code

import Loan from "./loan.PNG";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleNewaccount = () => {
    // const message =
    //   this.createChatBotMessage("신규 계좌 개설을 선택하셨습니다.");
    // this.setChatbotMessage(message);
    const url = this.createChatBotMessage(
      <section>
        <iframe
          width="200"
          height="auto"
          title=" "
          src="https://www.youtube.com/embed/CrWm72wi1bo?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=CrWm72wi1bo"
          frameborder="0"
        ></iframe>
      </section>,
      { delay: 800 }
    );
    this.setChatbotMessage(url);
    const answer = this.createChatBotMessage("보고 따라해보세요 ㅋㅋㅋ", {
      delay: 1500,
    });
    this.setChatbotMessage(answer);
  };
  handleNewCardIssuance = () => {
    // const message = this.createChatBotMessage("대출 신청을 선택하셨습니다.");
    // this.setChatbotMessage(message);

    const url = this.createChatBotMessage(
      <section>
        <img src={Loan} alt="img" style={{ width: "250px", height: "auto" }} />
        <br />
        <a href="https://www.kakaobank.com/products/emergencyLoan">
          대출 상품 보러가기
        </a>
      </section>,
      { delay: 800 }
    );
    this.setChatbotMessage(url);
    const answer = this.createChatBotMessage("돈 많이 빌리세요 ㅋㅋㅋ", {
      delay: 1500,
    });
    this.setChatbotMessage(answer);
  };
  handleAccountInquiry = () => {
    const message = this.createChatBotMessage("계좌 잔액 : 860 원", {
      widget: "AccountInquiry",
    });
    this.setChatbotMessage(message);
  };
  handleContinue = () => {
    const message = this.createChatBotMessage(
      "Which quiz you want to try again?",
      {
        widget: "options",
      }
    );
    this.setChatbotMessage(message);
  };
  handleUnknown = () => {
    const message = this.createChatBotMessage("다시 입력해주세요.");
    this.setChatbotMessage(message);
  };
  handleGreeting = () => {
    const message = this.createChatBotMessage(
      <iframe
        width="200"
        height="auto"
        title=" "
        src="https://www.youtube.com/embed/j99-3IPLEfs?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=j99-3IPLEfs"
        frameborder="0"
      ></iframe>
    );
    this.setChatbotMessage(message);
  };
  messageHandler = () => {
    const message = this.createChatBotMessage("전화 연결 1599-3333");
    this.setChatbotMessage(message);
  };
  setChatbotMessage = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}
export default ActionProvider;
