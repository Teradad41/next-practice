import { getName } from "@/app/api";
import { Suspense } from "react";

// コンポーネント自体はキャッシュするけど、その中に動的なコンポーネントを入れたりできる
export async function UserCard({ children }: { children: React.ReactNode }) {
	"use cache";
	// await を無くしたら name, count が Promise になる
	// const name = getName();
	// const count = getCount();

	return (
		<div className="outline p-2 bg-blue-100 rounded-md">
			<div className="flex items-center space-x-1">
				Name:
				<Suspense
					fallback={
						<div className="animate-pulse inline-block bg-zinc-200 h-4 mt-1 w-20" />
					}
				>
					{getName()}
				</Suspense>
			</div>
			{children}
		</div>
	);
}

// わざわざコンポーネントを作る必要もない
// async function Count() {
// 	const count = await getCount();
// 	return count;
// }

// async function Name() {
// 	const name = await getName();
// 	return name;
// }
