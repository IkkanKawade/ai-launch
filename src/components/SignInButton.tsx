"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session?.user) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center space-x-2 text-sm text-white hover:opacity-80"
      >
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
        <span>{session.user.name ?? "Logout"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white text-purple-600 font-medium px-3 py-1 rounded hover:bg-gray-100"
    >
      Googleでログイン
    </button>
  );
}
