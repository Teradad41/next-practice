"use client";

import { Button } from "@/components/ui/button";
import {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerFooter,
} from "@/components/ui/emoji-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function MyEmojiPicker() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button>Open emoji picker</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <EmojiPicker
          className="h-[342px]"
          onEmojiSelect={({ emoji }) => {
            setIsOpen(false);
            console.log(emoji);
          }}
        >
          <EmojiPickerSearch />
          <EmojiPickerContent />
          <EmojiPickerFooter />
        </EmojiPicker>
      </PopoverContent>
    </Popover>
  );
}
