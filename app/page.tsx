import Link from "next/link";

import { UserCard } from "@/components/UserCard";
import { Suspense } from "react";
import { getCount } from "./api";
import { MyEmojiPicker } from "@/components/EmojiPicker";

export default function MainPage() {
  return (
    <div className="p-10 space-y-4">
      <UserCard>
        <div className="flex items-center">
          Count:
          <Suspense fallback={"---"}>{getCount()}</Suspense>
        </div>
      </UserCard>
      <UserCard>
        <span className="flex items-center">誕生日: 2001/10/31</span>
      </UserCard>
      <Link href="/nuqs">Go!</Link>
      <div>
        <MyEmojiPicker />
      </div>
    </div>
  );
}
