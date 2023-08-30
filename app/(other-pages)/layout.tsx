import Navbar from "../components/Navbar/Navbar";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />

      {children}
    </section>
  );
}
