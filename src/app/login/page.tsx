import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "ログイン | HACHIDORI COFFEE",
  description: "HACHIDORI COFFEEにログイン",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        <div className="bg-brand-green py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label text-brand-gold/60 mb-4">Account</p>
            <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl text-brand-cream/90">
              ログイン
            </h1>
          </div>
        </div>

        <div className="bg-brand-cream py-16 sm:py-20">
          <div className="mx-auto max-w-sm px-4">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
