"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Achievement = {
  id: number;
  Title: string;
  achievement_by: string;
  content: string;
  image_url: string;
};

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<
    Achievement[]
  >([]);

  const [title, setTitle] = useState("");
  const [achievementBy, setAchievementBy] =
    useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] =
    useState("");

  const [editingId, setEditingId] =
    useState<number | null>(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  async function fetchAchievements() {
    const { data, error } = await supabase
      .from("Achievements")
      .select("*")
      .order("id", {
        ascending: false,
      });

    if (!error && data) {
      setAchievements(data);
    }
  }

  async function addAchievement() {
    if (!title || !achievementBy)
      return;

    const { error } = await supabase
      .from("Achievements")
      .insert([
        {
          Title: title,
          achievement_by: achievementBy,
          content,
          image_url: imageUrl,
        },
      ]);

    if (!error) {
      setTitle("");
      setAchievementBy("");
      setContent("");
      setImageUrl("");

      fetchAchievements();
    }
  }

  async function updateAchievement() {
    if (!editingId) return;

    const { error } = await supabase
      .from("Achievements")
      .update({
        Title: title,
        achievement_by: achievementBy,
        content,
        image_url: imageUrl,
      })
      .eq("id", editingId);

    if (!error) {
      setEditingId(null);

      setTitle("");
      setAchievementBy("");
      setContent("");
      setImageUrl("");

      fetchAchievements();
    }
  }

  async function deleteAchievement(
    id: number
  ) {
    const confirmDelete =
      window.confirm(
        "Delete this achievement?"
      );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("Achievements")
      .delete()
      .eq("id", id);

    if (!error) {
      fetchAchievements();
    }
  }

  function editAchievement(
    item: Achievement
  ) {
    setEditingId(item.id);

    setTitle(item.Title);
    setAchievementBy(
      item.achievement_by
    );
    setContent(item.content);
    setImageUrl(item.image_url);
  }

  return (
    <div className="space-y-8 text-gray-900">
      <h1 className="text-3xl font-bold">
        Achievements Management
      </h1>

      <div className="bg-gray-50 border border-gray-300 p-6 rounded-xl shadow-lg">
        <h2 className="font-semibold text-lg mb-4">
          {editingId
            ? "Edit Achievement"
            : "Add Achievement"}
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black"
            placeholder="Achievement Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black"
            placeholder="Achievement By"
            value={achievementBy}
            onChange={(e) =>
              setAchievementBy(
                e.target.value
              )
            }
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(
                e.target.value
              )
            }
          />

          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black"
            placeholder="Achievement Content"
            value={content}
            onChange={(e) =>
              setContent(
                e.target.value
              )
            }
          />

          {editingId ? (
            <button
              onClick={
                updateAchievement
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Update Achievement
            </button>
          ) : (
            <button
              onClick={
                addAchievement
              }
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Add Achievement
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-300 p-6 rounded-xl shadow-lg overflow-x-auto">
        <h2 className="font-semibold text-lg mb-4">
          All Achievements
        </h2>

        <table className="w-full text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">
                Title
              </th>

              <th className="p-3 text-left">
                Achievement By
              </th>

              <th className="p-3 text-left">
                Image URL
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {achievements.map(
              (item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-3">
                    {item.Title}
                  </td>

                  <td className="p-3">
                    {
                      item.achievement_by
                    }
                  </td>

                  <td className="p-3 max-w-xs truncate">
                    {item.image_url}
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() =>
                        editAchievement(
                          item
                        )
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteAchievement(
                          item.id
                        )
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}