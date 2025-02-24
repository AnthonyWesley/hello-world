import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/hello", async (req: Request, res: Response) => {
  try {
    const message = await prisma.message.create({
      data: { text: "Hello, World!" },
    });

    res.json({ message: message.text });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
