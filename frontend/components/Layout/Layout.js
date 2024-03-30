import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main className="bg-[#F6F6F6]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
