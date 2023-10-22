"use client";

import AvatarImage from "@/assets/images/AvatarImage.png";
import { Menu, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between w-full px-4 h-20 items-center">
      <main className="flex items-center gap-2">
        <Image src={AvatarImage} alt="Mbaire Logo" width={32} height={32} />
        <h1>Mary Mbaire</h1>
      </main>
      <aside>
        <Button variant="default" onClick={() => setOpen(!open)}>
          {!open ? <Menu /> : <XCircle />}
        </Button>
      </aside>
    </nav>
  );
}
