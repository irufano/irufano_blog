import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <header>
        <div className="flex justify-between items-center p-4 bg-emerald-300 dark:bg-gray-800 fixed">
          <h1 className="text-2xl font-bold mr-4">My Blog</h1>
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
      <footer className="p-4 text-center">
        <p>© 2024 My Blog</p>
      </footer>
    </div>
  );
}
