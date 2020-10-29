import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";
import ChatBox from "./chatbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `function respond(val) { 
        // BOT LOGIC GOES HERE
        // 'inputText' is the text entered 
        // by the user speaking to your bot
        
        // When you are done, return a string
        // you want to send back to the user
        return val.toUpperCase();
}`,
      disableButton: true,
    };
  }
  editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  getEditorvalue = () => {
    const model = this.refs.monaco.editor.getModel();
    const value = model.getValue();
    this.setState({ code: value, disableButton: true });
  };

  onChange = (val) => {
    this.setState({ code: val, disableButton: false });
  };

  getCode = ()=> {
    const { code } = this.state;
    return code;
  }

  render() {
    const { code, disableButton } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <div className="main">
        <div className = "row">
          <header>
            <h3 style= {{color:"white", padding:'10px'}}> 
                AI Playground
            </h3>
          </header>
        </div>
        <div className="container row">
          <div className="column">
            <button
              className="myButton"
              onClick={this.getEditorvalue}
              disabled={disableButton}
            >
              {" "}
              Apply Changes{" "}
            </button>
            <MonacoEditor
              width="100%"
              height="100vh"
              language="javascript"
              theme="vs-dark"
              value={code}
              options={options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
              ref="monaco"
            />
          </div>
          <div className="column">
            <ChatBox getCode = {this.getCode} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
