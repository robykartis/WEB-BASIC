import FooterHome from "./FooterHome";
import NavbarHome from "./NavbarHome";

export default function BaseLayoutHome({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      
        <NavbarHome/>

        {children}
        <FooterHome/>
      </>
    );
  }