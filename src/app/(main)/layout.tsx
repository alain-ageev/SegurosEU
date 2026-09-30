import { V2Footer } from "@/components/v2/footer";
import { V2Header } from "@/components/v2/header";
import "../v2/v2.css";

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="v2-shell">
      <V2Header />
      <main id="conteudo">{children}</main>
      <V2Footer />
    </div>
  );
}
