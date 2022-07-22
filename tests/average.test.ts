import supertest from "supertest";
import { prisma } from "../src/database";
import app from "../src/app";

describe("GET /process/sum", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Should return R$110000,00", async () => {
    const response = await supertest(app).get(
      "/process/average?clientCNPJ=00000000001&state=Rio de Janeiro"
    );

    expect(response.body).toBe("R$110000,00");
  });
});
