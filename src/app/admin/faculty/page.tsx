"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Faculty = {
  id: number;
  faculty_name: string;
  designation: string;
  photo_url: string;
};

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);

  const [facultyName, setFacultyName] =
    useState("");

  const [designation, setDesignation] =
    useState("");

  const [photoUrl, setPhotoUrl] =
    useState("");

  const [editingId, setEditingId] =
    useState<number | null>(null);

  useEffect(() => {
    fetchFaculty();
  }, []);

  async function fetchFaculty() {
    const { data, error } = await supabase
      .from("Faculty")
      .select("*")
      .order("id", {
        ascending: false,
      });

    if (!error && data) {
      setFaculty(data);
    }
  }

  async function addFaculty() {
    if (
      !facultyName ||
      !designation
    )
      return;

    const { error } = await supabase
      .from("Faculty")
      .insert([
        {
          faculty_name: facultyName,
          designation,
          photo_url: photoUrl,
        },
      ]);

    if (!error) {
      setFacultyName("");
      setDesignation("");
      setPhotoUrl("");

      fetchFaculty();
    }
  }

  async function updateFaculty() {
    if (!editingId) return;

    const { error } = await supabase
      .from("Faculty")
      .update({
        faculty_name: facultyName,
        designation,
        photo_url: photoUrl,
      })
      .eq("id", editingId);

    if (!error) {
      setEditingId(null);

      setFacultyName("");
      setDesignation("");
      setPhotoUrl("");

      fetchFaculty();
    }
  }

  async function deleteFaculty(
    id: number
  ) {
    const confirmDelete =
      window.confirm(
        "Delete this faculty member?"
      );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("Faculty")
      .delete()
      .eq("id", id);

    if (!error) {
      fetchFaculty();
    }
  }

  function editFaculty(
    item: Faculty
  ) {
    setEditingId(item.id);

    setFacultyName(
      item.faculty_name
    );

    setDesignation(
      item.designation
    );

    setPhotoUrl(
      item.photo_url || ""
    );
  }

  return (
    <div className="space-y-8 text-black">
      <h1 className="text-3xl font-bold">
        Faculty Management
      </h1>

      <div className="bg-slate-100 p-6 rounded-xl shadow border border-slate-300">
        <h2 className="font-semibold mb-4">
          {editingId
            ? "Edit Faculty"
            : "Add Faculty"}
        </h2>

        <div className="space-y-4">

          <input
            className="w-full border border-slate-300 rounded-lg p-3 bg-white"
            placeholder="Faculty Name"
            value={facultyName}
            onChange={(e) =>
              setFacultyName(
                e.target.value
              )
            }
          />

          <input
            className="w-full border border-slate-300 rounded-lg p-3 bg-white"
            placeholder="Designation"
            value={designation}
            onChange={(e) =>
              setDesignation(
                e.target.value
              )
            }
          />

          <input
            className="w-full border border-slate-300 rounded-lg p-3 bg-white"
            placeholder="Photo URL"
            value={photoUrl}
            onChange={(e) =>
              setPhotoUrl(
                e.target.value
              )
            }
          />

          {editingId ? (
            <button
              onClick={
                updateFaculty
              }
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update Faculty
            </button>
          ) : (
            <button
              onClick={addFaculty}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Add Faculty
            </button>
          )}
        </div>
      </div>

      <div className="bg-slate-100 p-6 rounded-xl shadow border border-slate-300">
        <h2 className="font-semibold mb-4">
          All Faculty
        </h2>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-200">
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Designation
              </th>

              <th className="p-3 text-left">
                Photo URL
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-3">
                  {
                    item.faculty_name
                  }
                </td>

                <td className="p-3">
                  {
                    item.designation
                  }
                </td>

                <td className="p-3">
                  {
                    item.photo_url
                  }
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() =>
                      editFaculty(
                        item
                      )
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteFaculty(
                        item.id
                      )
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