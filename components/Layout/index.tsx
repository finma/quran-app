import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="container mx-auto ">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
