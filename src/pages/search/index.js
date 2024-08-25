export default function SearchPage({ posts }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}
