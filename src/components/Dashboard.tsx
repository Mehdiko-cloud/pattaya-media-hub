import React from "react";

export default function Dashboard({ profile, onLogout } : { profile:any, onLogout:()=>void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex items-center gap-2">
          <div>{profile?.name}</div>
          <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <div className="mt-6 text-sm text-slate-600">
        This is a minimal dashboard placeholder. The full upload & approval UI will be used here later.
      </div>
    </div>
  );
}
