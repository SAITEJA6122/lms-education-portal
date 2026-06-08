"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen sticky top-0 p-5 shadow-xl">
      <h1 className="text-2xl font-bold mb-8">
        LMS Admin
      </h1>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin/dashboard"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/admin/news"
              className="block p-3 rounded hover:bg-slate-700"
            >
              News
            </Link>
          </li>

          <li>
            <Link
              href="/admin/events"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              href="/admin/gallery"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/admin/faculty"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Faculty
            </Link>
          </li>

          <li>
            <Link
              href="/admin/achievements"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Achievements
            </Link>
          </li>

          <li>
            <Link
              href="/admin/downloads"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Downloads
            </Link>
          </li>

          <li>
            <Link
              href="/admin/enquiries"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Enquiries
            </Link>
          </li>

          <li>
            <Link
              href="/admin/testimonials"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              href="/admin/content"
              className="block p-3 rounded hover:bg-slate-700"
            >
              CMS
            </Link>
          </li>

          <li>
            <Link
              href="/admin/users"
              className="block p-3 rounded hover:bg-slate-700"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}