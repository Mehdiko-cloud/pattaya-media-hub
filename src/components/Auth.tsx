import React, { useState } from "react";

type User = { name: string; email: string; password: string };

function saveUserToLocal(user: User) {
  const usersRaw = localStorage.getItem("pmh_users");
  const users: User[] = usersRaw ? JSON.parse(usersRaw) : [];
  users.push(user);
  localStorage.setItem("pmh_users", JSON.stringify(users));
}

function findUserByEmail(email: string): User | undefined {
  const usersRaw = localStorage.getItem("pmh_users");
  const users: User[] = usersRaw ? JSON.parse(usersRaw) : [];
  return users.find((u: User) => u.email.toLowerCase() === email.toLowerCase());
}

export default function Auth({ onAuthSuccess }: { onAuthSuccess: (user: User) => void }) {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function clearForm() {
    setName(""); setEmail(""); setPassword(""); setError("");
  }

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) return setError("Please enter a valid email.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (findUserByEmail(email)) return setError("An account with this email already exists.");

    const newUser = { name: name || "Unnamed", email, password };
    saveUserToLocal(newUser);
    // auto-login after signup:
    localStorage.setItem("pmh_session", JSON.stringify({ email: newUser.email }));
    onAuthSuccess(newUser);
    clearForm();
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const user = findUserByEmail(email);
    if (!user) return setError("No account found with that email.");
    if (user.password !== password) return setError("Incorrect password.");
    localStorage.setItem("pmh_session", JSON.stringify({ email: user.email }));
    onAuthSuccess(user);
    clearForm();
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-lg ${mode==="signup" ? "bg-blue-600 text-white" : "border"}`}
          onClick={()=>{ setMode("signup"); setError(""); clearForm(); }}
        >Sign up</button>
        <button
          className={`px-4 py-2 rounded-lg ${mode==="login" ? "bg-blue-600 text-white" : "border"}`}
          onClick={()=>{ setMode("login"); setError(""); clearForm(); }}
        >Log in</button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        {mode === "signup" ? (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Business / Your name</label>
              <input className="w-full mt-1 p-2 border rounded" value={name} onChange={e=>setName(e.target.value)} placeholder="Bar / Restaurant name or your name"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input className="w-full mt-1 p-2 border rounded" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@domain.com"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input className="w-full mt-1 p-2 border rounded" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="min 6 characters"/>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded" type="submit">Create account & continue</button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input className="w-full mt-1 p-2 border rounded" value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input className="w-full mt-1 p-2 border rounded" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded" type="submit">Log in</button>
          </form>
        )}
      </div>
    </div>
  );
}
