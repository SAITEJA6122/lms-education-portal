"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type GalleryItem = {
  id: number;
  Title: string;
  image_url: string;
  created_at: string;
};

export default function GalleryPage() {
  const [gallery, setGallery] = useState<
    GalleryItem[]
  >([]);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] =
    useState("");

  const [editingId, setEditingId] =
    useState<number | null>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    const { data, error } = await supabase
      .from("Gallery")
      .select("*")
      .order("id", {
        ascending: false,
      });

    if (!error && data) {
      setGallery(data);
    }
  }

  async function addGallery() {
    if (!title || !imageUrl) return;

    const { error } = await supabase
      .from("Gallery")
      .insert([
        {
          Title: title,
          image_url: imageUrl,
        },
      ]);

    if (!error) {
      setTitle("");
      setImageUrl("");

      fetchGallery();
    }
  }

  async function updateGallery() {
    if (!editingId) return;

    const { error } = await supabase
      .from("Gallery")
      .update({
        Title: title,
        image_url: imageUrl,
      })
      .eq("id", editingId);

    if (!error) {
      setEditingId(null);

      setTitle("");
      setImageUrl("");

      fetchGallery();
    }
  }

  async function deleteGallery(
    id: number
  ) {
    const confirmDelete =
      window.confirm(
        "Delete this gallery item?"
      );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("Gallery")
      .delete()
      .eq("id", id);

    if (!error) {
      fetchGallery();
    }
  }

  function editGallery(
    item: GalleryItem
  ) {
    setEditingId(item.id);

    setTitle(item.Title);

    setImageUrl(item.image_url);
  }

  return (
    <div className="space-y-8 text-black">
      <h1 className="text-3xl font-bold">
        Gallery Management
      </h1>

      <div className="bg-slate-100 border border-slate-300 rounded-xl shadow p-6">
        <h2 className="font-semibold text-lg mb-4">
          {editingId
            ? "Edit Gallery Item"
            : "Add Gallery Item"}
        </h2>

        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-lg border border-slate-300 bg-white"
            placeholder="Gallery Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-lg border border-slate-300 bg-white"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(
                e.target.value
              )
            }
          />

          {imageUrl && (
            <div className="bg-white border border-slate-300 rounded-xl p-4">
              <p className="font-medium mb-3">
                Image Preview
              </p>

              <img
                src={imageUrl}
                alt="Preview"
                className="w-64 h-40 object-cover rounded-lg border"
              />
            </div>
          )}

          {editingId ? (
            <button
              onClick={
                updateGallery
              }
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update Gallery Item
            </button>
          ) : (
            <button
              onClick={addGallery}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Add Gallery Item
            </button>
          )}
        </div>
      </div>

      <div className="bg-slate-100 border border-slate-300 rounded-xl shadow p-6">
        <h2 className="font-semibold text-lg mb-4">
          Gallery Records
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-200">
                <th className="p-3 text-left">
                  Image
                </th>

                <th className="p-3 text-left">
                  Title
                </th>

                <th className="p-3 text-left">
                  Created
                </th>

                <th className="p-3 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {gallery.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-3">
                    <img
                      src={
                        item.image_url
                      }
                      alt={
                        item.Title
                      }
                      className="w-24 h-16 object-cover rounded border"
                    />
                  </td>

                  <td className="p-3 font-medium">
                    {item.Title}
                  </td>

                  <td className="p-3">
                    {new Date(
                      item.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          editGallery(
                            item
                          )
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteGallery(
                            item.id
                          )
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {gallery.length ===
                0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center p-8 text-slate-500"
                  >
                    No Gallery Items Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}