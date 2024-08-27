import InsightNavbar from "./Navbar/InsightNavbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <InsightNavbar />
      <main>{children}</main>
      <footer className="p-4 text-center">
        <p>© 2024 My Blog</p>
      </footer>
    </div>
  );
}
