export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          LMS Admin Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          School Management System
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">
          Super Admin
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}