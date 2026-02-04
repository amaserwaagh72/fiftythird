"use client";

import Image from "next/image";

export default function LoginHeader() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-center bg-white p-5 py-[17px]">
      <Image src="https://i.postimg.cc/TYHb6fcm/dnnsdms.png" width={230} height={42} className="w-[200px] h-10" alt="logo" />
    </div>
  );
}
