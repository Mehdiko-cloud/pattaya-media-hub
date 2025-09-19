export default function Login() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Logga in</h1>
      <form className="mt-4 flex flex-col gap-2">
        <input type="email" placeholder="E-post" className="border p-2 rounded" />
        <input type="password" placeholder="Lösenord" className="border p-2 rounded" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logga in</button>
      </form>
    </div>
  );
}