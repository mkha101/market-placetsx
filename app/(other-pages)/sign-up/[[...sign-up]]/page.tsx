import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center mt-24 justify-center">
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
