import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import Options from "./Options";
import Widget from "./Widget";

const config = {
  botName: "QuizBot",
  initialMessages: [
    createChatBotMessage("안녕하세요", { withAvatar: true, delay: 400 }),
    createChatBotMessage("카카오뱅크 고객센터입니다.", {
      withAvatar: true,
      delay: 600,
    }),
    createChatBotMessage("무엇을 도와드릴까요?", {
      withAvatar: true,
      delay: 1000,
      widget: "options",
    }),
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#e9e9e9",
    },
    chatButton: {
      backgroundColor: "#fede22",
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#412b2b",
          color: "white",
          padding: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          fontSize: "0.85rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center",
        }}
      >
        카카오뱅크 고객센터
      </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
    // userAvatar: (props) => <UserAvatar {...props} />,
  },

  state: {
    Newaccount: [],
    AccountInquiry: [],
    NewCardIssuance: [],
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Newaccount",
      widgetFunc: (props) => <Widget {...props} />,
      props: {
        course: "Newaccount",
      },
    },
    // {
    //   widgetName: "docker",
    //   widgetFunc: (props) => <Quiz {...props} />,
    //   props: {
    //     course: "Docker",
    //   },
    // },
    // {
    //   widgetName: "sql",
    //   widgetFunc: (props) => <Quiz {...props} />,
    //   props: {
    //     course: "Sql",
    //   },
    // },
  ],
};

export default config;
