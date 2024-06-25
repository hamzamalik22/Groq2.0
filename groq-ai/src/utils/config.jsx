import Groq from "groq-sdk";
import conf from "./conf";

const groq = new Groq({ apiKey: conf.apiKey, dangerouslyAllowBrowser: true });

export async function main(question, model) {
  const chatCompletion = await getGroqChatCompletion(question, model);
  // Print the completion returned by the LLM.x
  // console.log(chatCompletion.choices[0]?.message?.content || "");
  const response = chatCompletion.choices[0]?.message?.content || "";
  console.log(response);
  console.log(model);
  return response;
}

export async function getGroqChatCompletion(question, model) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    model: model,
    // model: "mixtral-8x7b-32768",
  });
}
