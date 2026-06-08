"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type News = {
  id: number;
  Heading: string;
  date: string;
  content: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);

  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const { data, error } = await supabase
      .from("News")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setNews(data);
    }
  }

async function addNews() {
  if (!heading || !content || !date) {
    return;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("CURRENT USER:", user);

  const { data, error } = await supabase
    .from("News")
    .insert([
      {
        Heading: heading,
        date,
        content,
      },
    ])
    .select();

  console.log("INSERT DATA:", data);
  console.log("INSERT ERROR:", error);

  if (!error) {
    setHeading("");
    setDate("");
    setContent("");

    fetchNews();
  }
}

  async function updateNews() {
    if (!editingId) return;

    const { error } = await supabase
      .from("News")
      .update({
        Heading: heading,
        date,
        content,
      })
      .eq("id", editingId);

    if (!error) {
      setEditingId(null);

      setHeading("");
      setDate("");
      setContent("");

      fetchNews();
    }
  }

  async function deleteNews(id: number) {
    const confirmDelete = window.confirm(
      "Delete this news item?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("News")
      .delete()
      .eq("id", id);

    if (!error) {
      fetchNews();
    }
  }

  function editNews(item: News) {
    setEditingId(item.id);

    setHeading(item.Heading);
    setDate(item.date);
    setContent(item.content);
  }

  return (
    <div className="space-y-8 text-gray-900">
      <h1 className="text-3xl font-bold text-black">
        News Management
      </h1>

      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="font-semibold mb-4">
          {editingId
            ? "Edit News"
            : "Add News"}
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Heading"
            value={heading}
            onChange={(e) =>
              setHeading(e.target.value)
            }
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <textarea
            className="w-full border rounded-lg p-3"
            rows={5}
            placeholder="Content"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
          />

          {editingId ? (
            <button
              onClick={updateNews}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update News
            </button>
          ) : (
            <button
              onClick={addNews}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Add News
            </button>
          )}
        </div>
      </div>

      <div className="bg-blue p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">
          All News
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                Heading
              </th>

              <th className="text-left p-3">
                Date
              </th>

              <th className="text-left p-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr
                key={item.id}
                className="border-b"
              >
                <td className="p-3">
                  {item.Heading}
                </td>

                <td className="p-3">
                  {item.date}
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() =>
                      editNews(item)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteNews(item.id)
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}