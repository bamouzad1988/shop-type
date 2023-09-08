import { NextResponse } from "next/server";

export async function GET() {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/todos");
  const ss = await new Response(response1.body).text();
  return NextResponse.json(ss);
}
