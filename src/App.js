import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";
import ChatBox from "./chatbox";
const DEFAULT_CODE = `function respond(val) { 
  // BOT LOGIC GOES HERE
  // 'inputText' is the text entered 
  // by the user speaking to your bot
  
  // When you are done, return a string
  // you want to send back to the user
  return val.toUpperCase();
}`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:'',
      disableButton: true,
    };
  }

  componentDidMount() {
    const {data} = this.props;
    if(data.code){
     this.setState({code:data.code});
    }
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  getEditorvalue = () => {
    const model = this.refs.monaco.editor.getModel();
    const value = model.getValue();
    this.setState({ code: value, disableButton: true });
    const {saveCode} = this.props;
    saveCode(value);
  };

  onChange = (val) => {
    this.setState({ code: val, disableButton: false });
  };

  getCode = ()=> {
    const { code } = this.props.data;
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
              value={code || DEFAULT_CODE}
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
