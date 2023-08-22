"use client";

import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex items-center mt-32 justify-center">
      <SignIn
        signUpUrl="/sign-up"
        redirectUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue",
            card: "text-white",
            footer: "p",
          },
        }}
      />
    </div>
  );
}
