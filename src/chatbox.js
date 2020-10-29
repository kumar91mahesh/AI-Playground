import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import SafeEval from "safe-eval";
import { ThemeProvider } from "styled-components";
const theme = {
  background: "#1e1e1e",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#4e4d4c",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#4e4d4c",
  botFontColor: "#fff",
  userBubbleColor: "#4e4d4c",
  userFontColor: "#fff",
};
class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: "",
      trigger: false,
    };
  }

  render() {
    const props = this.props;
    const steps = [
      {
        id: "first",
        message: "welcome",
        trigger: "search",
      },
      {
        id: "1",
        message: function({ previousValue, steps }) {
          const evaluated = SafeEval(props.chatBotData.code);
          const val = evaluated(steps.search.value);
          return val;
        },
        trigger: "search",
      },
      {
        id: "search",
        user: true,
        trigger: "1",
      },
    ];
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          key={props.chatBotData.count}
          steps={steps}
          width="100%"
        />
      </ThemeProvider>
    );
  }
}

export default ChatBox;
