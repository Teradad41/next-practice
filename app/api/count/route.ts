import { NextResponse } from "next/server";

export function GET() {
	const count = Math.floor(Math.random() * 100);
	return NextResponse.json(count);
}
