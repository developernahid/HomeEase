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
                style={{
                    minHeight: `calc(100vh - ${headerHeight}px)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                    background: "linear-gradient(180deg,#fafafa,#fff)",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: 420,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.06)",
                        borderRadius: 10,
                        padding: 28,
                        boxShadow: "0 6px 20px rgba(16,24,40,0.06)",
                    }}
                >
                    {children}
                </div>
            </main>
        </>
    );
}
