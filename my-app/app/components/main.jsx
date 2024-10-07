"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function main() {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const handleClick = () => {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/");

    const country = pathParts[1];
    const id = pathParts[4].replace("id", "");
    router.push(`/${country}/${id}`);
  };
  return (
    <div>
      <TextField.Root
        placeholder="Enter the appstore url …"
        onChange={(e) => setUrl(e.target.value)}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Button variant="outline" onClick={handleClick}>
        Download
      </Button>
    </div>
  );
}
