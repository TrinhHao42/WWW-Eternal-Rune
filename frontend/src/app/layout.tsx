import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <Header />
            <html className="flex-1">
                <body>
                    {children}
                </body>
            </html>
            <Footer />
        </div>
    );
};

export default Layout;
