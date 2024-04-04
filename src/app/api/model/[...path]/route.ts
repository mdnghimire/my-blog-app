import { enhance } from "@zenstackhq/runtime";
import RestApiHandler from "@zenstackhq/server/api/rest";
import { NextRequestHandler } from "@zenstackhq/server/next";

import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  const session = await getServerAuthSession();
  return enhance(db, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export default NextRequestHandler({
  getPrisma,
  handler: RestApiHandler({ endpoint: "http://localhost:3000/api" }),
});

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
