import supertest from "supertest";
import { prisma } from "../src/database";
import app from "../src/app";

describe("GET /process/count", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Should return 2", async () => {
    const response = await supertest(app).get("/process/count?gt=10000000");

    expect(response.body).toBe(2);
  });
});
