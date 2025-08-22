export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Hello, world!</h1>
        <p className="text-gray-600">This is a Next.js + Tailwind server-ready app.</p>
        <p className="mt-4 text-sm text-gray-500">
          Try the API at <code className="font-mono bg-gray-200 px-1 py-0.5 rounded">/api/hello</code>
        </p>
      </div>
    </main>
  );
}
