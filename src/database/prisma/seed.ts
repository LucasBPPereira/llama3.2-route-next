import { prisma } from "./prisma.ts";

const users = [
    {
      name: 'Alice Souza',
      age: new Date('1988-11-20T00:00:00.000Z'),
      email: 'alice.souza@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Pedro Alves',
      age: new Date('2002-07-10T00:00:00.000Z'),
      email: 'pedro.alves@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Mariana Costa',
      age: new Date('1975-03-01T00:00:00.000Z'),
      email: 'mariana.costa@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Lucas Ferreira',
      age: new Date('1999-12-28T00:00:00.000Z'),
      email: 'lucas.ferreira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Ana Rodrigues',
      age: new Date('1982-06-15T00:00:00.000Z'),
      email: 'ana.rodrigues@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Gabriel Santos',
      age: new Date('2005-01-22T00:00:00.000Z'),
      email: 'gabriel.santos@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Laura Oliveira',
      age: new Date('1993-09-07T00:00:00.000Z'),
      email: 'laura.oliveira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Rafael Pereira',
      age: new Date('1979-04-30T00:00:00.000Z'),
      email: 'rafael.pereira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Sofia Lima',
      age: new Date('2000-11-05T00:00:00.000Z'),
      email: 'sofia.lima@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Mateus Rodrigues',
      age: new Date('1985-02-18T00:00:00.000Z'),
      email: 'mateus.rodrigues@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Isabela Gomes',
      age: new Date('1996-08-24T00:00:00.000Z'),
      email: 'isabela.gomes@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Thiago Silva',
      age: new Date('1970-10-12T00:00:00.000Z'),
      email: 'thiago.silva@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Beatriz Pereira',
      age: new Date('2003-04-01T00:00:00.000Z'),
      email: 'beatriz.pereira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Fernando Costa',
      age: new Date('1989-07-29T00:00:00.000Z'),
      email: 'fernando.costa@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Juliana Alves',
      age: new Date('1981-01-05T00:00:00.000Z'),
      email: 'juliana.alves@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Ricardo Ferreira',
      age: new Date('1997-05-21T00:00:00.000Z'),
      email: 'ricardo.ferreira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Amanda Rodrigues',
      age: new Date('1973-12-10T00:00:00.000Z'),
      email: 'amanda.rodrigues@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Vinicius Santos',
      age: new Date('2001-09-18T00:00:00.000Z'),
      email: 'vinicius.santos@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Camila Oliveira',
      age: new Date('1986-03-05T00:00:00.000Z'),
      email: 'camila.oliveira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
    {
      name: 'Eduardo Pereira',
      age: new Date('1992-06-30T00:00:00.000Z'),
      email: 'eduardo.pereira@example.com',
      createdAt: new Date('2025-05-03T23:50:00.000Z'),
      updatedAt: new Date('2025-05-03T23:50:00.000Z'),
    },
  ];

export async function createManyUsers() {
    await prisma.user.createMany({
        data: users
    });

    console.log("Usuários criados")

}