import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Link from "next/link";

export const metadata = {
    title: "Login — HomeEase",
};

export default function LoginLayout({ children }) {
    return (
        <>
            <Header />

            <main
            >
                {children}
                <Footer />
            </main>
        </>
    );
}
