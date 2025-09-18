export default function Signup() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Registrera konto</h1>
      <form className="mt-4 flex flex-col gap-2">
        <input type="text" placeholder="Namn" className="border p-2 rounded" />
        <input type="email" placeholder="E-post" className="border p-2 rounded" />
        <input type="password" placeholder="Lösenord" className="border p-2 rounded" />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Skapa konto</button>
      </form>
    </div>
  );
}