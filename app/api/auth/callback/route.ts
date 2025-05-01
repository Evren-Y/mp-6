import { getTokens, getUserInfo } from "@/lib/oauth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) return NextResponse.redirect("/");

  try {
    const { access_token } = await getTokens(code);
    const user = await getUserInfo(access_token);
    const encoded = encodeURIComponent(JSON.stringify(user));
    return NextResponse.redirect(`/?user=${encoded}`);
  } catch (error) {
    console.error(error);
    return NextResponse.redirect("/");
  }
}
