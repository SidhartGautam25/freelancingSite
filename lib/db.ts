/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Database client configuration.
 *
 * To connect a database with Prisma:
 * 1. npm install @prisma/client @prisma/adapter-mariadb mariadb
 * 2. npm install -D prisma
 * 3. npx prisma init
 */

let PrismaClientClass: any;
let PrismaMariaDbClass: any;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaClientClass = require("@prisma/client")?.PrismaClient;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaMariaDbClass = require("@prisma/adapter-mariadb")?.PrismaMariaDb;
} catch {
  // Prisma is optional and not installed yet
}

const globalForPrisma = globalThis as unknown as {
  prisma: any;
};

function createClient(): any {
  if (!PrismaClientClass || !PrismaMariaDbClass) {
    return null;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not defined");
  }

  const url = new URL(databaseUrl);
  const host = url.hostname === "localhost" ? "127.0.0.1" : url.hostname;
  const adapter = new PrismaMariaDbClass({
    host,
    port: url.port ? parseInt(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.substring(1),
    connectionLimit: 5,
  });

  return new PrismaClientClass({ adapter });
}

const getPrisma = (): any => {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createClient();
  }
  return globalForPrisma.prisma;
};

// A Proxy that forwards all property accesses to the actual prisma client instance
const prisma: any = new Proxy({} as any, {
  get(target, prop, receiver) {
    const client = getPrisma();
    if (!client) return undefined;
    const value = Reflect.get(client, prop, receiver);
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

export { prisma };
export default prisma;
