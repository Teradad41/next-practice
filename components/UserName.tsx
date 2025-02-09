import { unstable_cacheTag } from "next/cache";

export async function UserName() {
	"use cache";
	unstable_cacheTag("name");

	const users = await fetch("http://localhost:3000/api/name");
	const data = await users.json();

	return (
		<>
			<div>UserName</div>
			<div>{data.data.name}</div>
		</>
	);
}
