import { NextResponse } from "next/server";

const NAMES = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Eve",
	"Frank",
	"Grace",
	"Hannah",
	"Ivan",
	"Jack",
	"Katie",
	"Liam",
	"Mia",
	"Nathan",
	"Olivia",
	"Peter",
	"Quinn",
	"Rachel",
	"Sam",
	"Tina",
	"Ursula",
	"Victor",
	"Wendy",
	"Xavier",
	"Yvonne",
	"Zach",
];

export async function GET() {
	const randomUser = NAMES[Math.floor(Math.random() * NAMES.length)];
	return NextResponse.json(randomUser);
}
