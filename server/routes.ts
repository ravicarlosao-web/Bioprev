import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/newsletter", async (req, res) => {
    try {
      const emailSchema = insertNewsletterSchema.extend({
        email: z.string().email("Email inválido"),
      });
      const data = emailSchema.parse(req.body);
      const existing = await storage.getNewsletterSubscriber(data.email);
      if (existing) {
        return res.json({ message: "Este email já está subscrito na nossa newsletter." });
      }
      await storage.subscribeNewsletter(data);
      return res.json({ message: "Subscrição realizada com sucesso! Obrigado por se juntar à nossa newsletter." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Por favor, insira um email válido." });
      }
      return res.status(500).json({ message: "Erro ao processar a subscrição. Tente novamente." });
    }
  });

  return httpServer;
}
