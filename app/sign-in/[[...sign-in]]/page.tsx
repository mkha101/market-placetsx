import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex items-center justify-center">
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
