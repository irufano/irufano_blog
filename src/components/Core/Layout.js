import { ubuntu } from "@/utils/font";
import DevNavbar from "./Navbar/DevNavbar";
import InsightNavbar from "./Navbar/InsightNavbar";

export const LayoutType = Object.freeze({
  DEV: "dev",
  TOOLS: "tools",
  INSIGHT: "insight",
});

export default function Layout({ children, type = LayoutType.DEV }) {
  switch (type) {
    case LayoutType.DEV:
      return (
        <div className={`${ubuntu} font-ubuntu min-h-screen`}>
          <DevNavbar />
          <main className="font-ubuntu">{children}</main>
          <footer className="p-4 text-center">
            <p>© 2024 My Blog</p>
          </footer>
        </div>
      );

    case LayoutType.INSIGHT:
      return (
        <div className={`${ubuntu} font-ubuntu min-h-screen`}>
          <InsightNavbar />
          <main>{children}</main>
          <footer className="p-4 text-center">
            <p>© 2024 My Blog</p>
          </footer>
        </div>
      );

    default:
      return (
        <div className={`${ubuntu} font-ubuntu min-h-screen`}>
          <InsightNavbar />
          <main className="font-ubuntu">{children}</main>
          <footer className="p-4 text-center">
            <p>© 2024 My Blog</p>
          </footer>
        </div>
      );
  }
}
