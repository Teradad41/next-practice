export function GET() {
	const count = Math.floor(Math.random() * 100);
	return Response.json(count);
}
