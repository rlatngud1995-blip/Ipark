
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const url = new URL(
    "/ipark_favicon.ico",
    request.url
  );

  return NextResponse.redirect(url, 307);
}
