import express from "express";
import contactRouter from "./contact";
import { createServer } from "http";

export async function registerRoutes(app: express.Express): Promise<ReturnType<typeof createServer>> {
  // put application routes here
  // prefix all routes with /api

  app.use("/api", contactRouter);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
