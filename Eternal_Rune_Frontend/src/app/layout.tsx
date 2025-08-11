import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <html>
                <body>
                    {children}
                </body>
            </html>
            <Footer />
        </div>
    );
};

export default Layout;
