import { ubuntu } from "@/utils/font";
import DevNavbar from "./Navbar/DevNavbar";
import InsightNavbar from "./Navbar/InsightNavbar";
import Footer from "./Footer/Footer";

export const LayoutType = Object.freeze({
  DEV: "dev",
  TOOLS: "tools",
  INSIGHT: "insight",
});

export default function Layout({ children, type = LayoutType.DEV }) {
  switch (type) {
    case LayoutType.DEV:
      return (
        <div className={`${ubuntu} font-ubuntu flex flex-col min-h-screen`}>
          <DevNavbar />
          <main className="font-ubuntu flex-grow">{children}</main>
          <Footer />
        </div>
      );

    case LayoutType.INSIGHT:
      return (
        <div className={`${ubuntu} font-ubuntu flex flex-col min-h-screen`}>
          <InsightNavbar />
          <main className="font-ubuntu flex-grow">{children}</main>
          <Footer />
        </div>
      );

    default:
      return (
        <div className={`${ubuntu} font-ubuntu flex flex-col min-h-screen`}>
          <DevNavbar />
          <main className="font-ubuntu flex-grow">{children}</main>
          <Footer />
        </div>
      );
  }
}
