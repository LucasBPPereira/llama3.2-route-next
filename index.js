// servidor node index.js para enviar as mensagens para a ollama3.2

import express from "express";
import axios from "axios";
import http from "http";

const app = express();

app.use(express.json());

const conversation = [
  { role: "system", content: "Você é um assistente útil e conciso." },
];

app.get("/getChatIA", async (req, res) => {
  if (conversation.length === 1) {
    res.json({ firstMessage: "Você ainda não iniciou um chat comigo..." }).status(200);
    return;
  }

  const chat = conversation.filter((cvs) => cvs.role !== "system");
  return res.json(chat);
});

app.post("/ia", async (req, res) => {
  const userMsg = req.body.text;
  conversation.push({ role: "user", content: userMsg });

  const { data } = await axios.post("http://localhost:11434/api/chat", {
    model: "llama3.2",
    messages: conversation,
    stream: false,
  });

  const assistantMsg = data.message.content;

  conversation.push({ role: "assistant", content: assistantMsg });

  console.log(conversation);
  res.json({ response: assistantMsg });
});

const server = http.createServer(app);

server.timeout = 600000; 

server.listen(3000, () => {
  console.log("Servidor proxy rodando na porta 3000");
});
