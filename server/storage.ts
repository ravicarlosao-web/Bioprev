import { type User, type InsertUser, type InsertNewsletter, type NewsletterSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  subscribeNewsletter(data: InsertNewsletter): Promise<NewsletterSubscriber>;
  getNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private subscribers: Map<string, NewsletterSubscriber>;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async subscribeNewsletter(data: InsertNewsletter): Promise<NewsletterSubscriber> {
    const existing = await this.getNewsletterSubscriber(data.email);
    if (existing) return existing;
    const id = randomUUID();
    const subscriber: NewsletterSubscriber = { id, email: data.email, subscribedAt: new Date() };
    this.subscribers.set(data.email, subscriber);
    return subscriber;
  }

  async getNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | undefined> {
    return this.subscribers.get(email);
  }
}

export const storage = new MemStorage();
