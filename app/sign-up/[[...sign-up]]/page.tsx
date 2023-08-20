import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <SignUp
        signInUrl="/signin"
        redirectUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue",

            card: "text-white",
          },
        }}
      />
    </div>
  );
}
