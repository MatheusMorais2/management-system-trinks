import supertest from "supertest";
import { prisma } from "../src/database";
import app from "../src/app";

describe("GET /process/sum", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Should return R$1087000,00", async () => {
    const response = await supertest(app).get("/process/sum?isActive=true");

    expect(response.body).toBe("R$1087000,00");
  });
});
