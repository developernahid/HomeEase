import Header from "@/Components/Header";
import Link from "next/link";

export const metadata = {
    title: "Login — HomeEase",
};

export default function LoginLayout({ children }) {
    const headerHeight = 64;
    return (
        <>
            <Header />

            <main
            >
                {children}
            </main>
        </>
    );
}
