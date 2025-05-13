import express, { type Request, type Response } from "express";
import axios from "axios";
import http from "http";

// Define o formato esperado da resposta da Ollama
interface OllamaMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OllamaResponse {
  message: OllamaMessage;
}

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

const app = express();
app.use(express.json());
// createManyUsers()

// Conversa em memória (em produção, use um armazenamento persistente)
const conversation: Message[] = [
  { role: "system", content: "Você é um assistente útil e conciso." },
];

// Retorna histórico de mensagens (exceto a mensagem de sistema)
app.get("/getChatIA", (req: Request, res: Response) => {
  if (conversation.length === 1) {
    res.status(200).json({ firstMessage: "Você ainda não iniciou um chat comigo..." });
    return
  }

  const chat = conversation.filter((msg) => msg.role !== "system");
  res.status(200).json(chat);
  return
});

// Recebe mensagem do usuário e encaminha à API local da Ollama
app.post("/ia", async (req: Request, res: Response) => {
  const userMsg = req.body.text as string;
  if (!userMsg) {
    res.status(400).json({ error: "Campo 'text' é obrigatório." });
    return;
  }

  conversation.push({ role: "user", content: userMsg });

  try {
    // Tipamos a resposta genérica como OllamaResponse
    const response = await axios.post(
      "http://localhost:11434/api/chat",
      {
        model: "llama3.2",
        messages: conversation,
        stream: false,
      }
    );

    const assistantMsg = (response.data as OllamaResponse).message.content;
    conversation.push({ role: "assistant", content: assistantMsg });

    console.log("Conversa atualizada:", conversation);
    res.status(200).json({ response: assistantMsg });
    return
  } catch (error: unknown) {
    console.error("Erro ao comunicar com a Ollama:", (error as Error).message);
    res.status(500).json({ error: "Erro ao processar a mensagem com a IA." });
    return
  }
});

// Cria e configura servidor HTTP
const server = http.createServer(app);
server.timeout = 600_000; // 10 minutos

server.listen(3000, () => {
  console.log("Servidor proxy rodando na porta 3000");
});
