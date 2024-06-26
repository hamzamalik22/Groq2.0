import { createContext, useState } from "react";
import { main } from "./config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [selectedModel, setSelectedModel] = useState("llama3-8b-8192");
  const [user, setUser] = useState(false);

  const onSent = async (prompt, model) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await main(prompt, model);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await main(input, selectedModel);
    }
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    toggle,
    setToggle,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
    selectedModel,
    setSelectedModel,
    user,
    setUser,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
