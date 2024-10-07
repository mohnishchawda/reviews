"use client";
import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";

const extractUrlParts = (url) => {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split("/");

  const country = pathParts[1];
  const appName = pathParts[3];
  const id = pathParts[4].replace("id", "");

  return { country, appName, id };
};

const main = () => {
  const [url, setUrl] = useState("");
  const [parts, setParts] = useState({ country: "", appName: "", id: "" });
  const handleExtract = () => {
    const extractedParts = extractUrlParts(url);
    setParts(extractedParts);
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
      <Button variant="outline" onClick={handleExtract}>
        Analyse
      </Button>
      <div>
        <p>Country: {parts.country}</p>
        <p>App Name: {parts.appName}</p>
        <p>ID: {parts.id}</p>
      </div>
    </div>
  );
};

export default main;
