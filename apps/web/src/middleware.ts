import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { fetchAuthSession } from "aws-amplify/auth/server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { authConfig } from "@/features/Auth/configs/authConfig";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const { runWithAmplifyServerContext } = createServerRunner({
    config: authConfig,
  });

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated) {
    return request.nextUrl.pathname === "/login"
      ? NextResponse.redirect(new URL("/", request.url))
      : response;
  } else {
    return request.nextUrl.pathname === "/login"
      ? response
      : NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - images (for this issue -> https://github.com/vercel/next.js/discussions/36308)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|images|_next/static|_next/image|favicon.ico).*)",
  ],
};
