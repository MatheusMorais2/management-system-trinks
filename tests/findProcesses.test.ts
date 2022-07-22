import supertest from "supertest";
import { prisma } from "../src/database";
import app from "../src/app";

describe("GET /process/", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Should a list of one process", async () => {
    const response = await supertest(app).get("/process/client?text=TRAB");

    expect(response.body.length).toBe(1);
  });
});
