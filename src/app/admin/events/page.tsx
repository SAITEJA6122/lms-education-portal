"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Event = {
  event_id: number;
  Title: string;
  Date: string;
  description: string;
  location: string;
  completion_status: number;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [completionStatus, setCompletionStatus] =
    useState(0);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("Events")
      .select("*")
      .order("event_id", {
        ascending: false,
      });

    if (!error && data) {
      setEvents(data);
    }
  }

  async function addEvent() {
    if (!title || !date) return;

    const { error } = await supabase
      .from("Events")
      .insert([
        {
          Title: title,
          Date: date,
          description,
          location,
          completion_status:
            completionStatus,
        },
      ]);

    if (!error) {
      setTitle("");
      setDate("");
      setDescription("");
      setLocation("");
      setCompletionStatus(0);

      fetchEvents();
    }
  }

  async function updateEvent() {
    if (!editingId) return;

    const { error } = await supabase
      .from("Events")
      .update({
        Title: title,
        Date: date,
        description,
        location,
        completion_status:
          completionStatus,
      })
      .eq("event_id", editingId);

    if (!error) {
      setEditingId(null);

      setTitle("");
      setDate("");
      setDescription("");
      setLocation("");
      setCompletionStatus(0);

      fetchEvents();
    }
  }

  async function deleteEvent(
    id: number
  ) {
    const confirmDelete =
      window.confirm(
        "Delete this event?"
      );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("Events")
      .delete()
      .eq("event_id", id);

    if (!error) {
      fetchEvents();
    }
  }

  function editEvent(item: Event) {
    setEditingId(item.event_id);

    setTitle(item.Title);
    setDate(item.Date);
    setDescription(item.description);
    setLocation(item.location);
    setCompletionStatus(
      item.completion_status
    );
  }

  return (
    <div className="space-y-8 text-black">
      <h1 className="text-3xl font-bold text-black">
        Events Management
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="font-semibold text-black mb-4">
          {editingId
            ? "Edit Event"
            : "Add Event"}
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
          />

          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
            placeholder="Completion Status"
            value={completionStatus}
            onChange={(e) =>
              setCompletionStatus(
                Number(
                  e.target.value
                )
              )
            }
          />

          {editingId ? (
            <button
              onClick={updateEvent}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Update Event
            </button>
          ) : (
            <button
              onClick={addEvent}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Add Event
            </button>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="font-semibold text-black mb-4">
          All Events
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3 text-black font-semibold">
                  Title
                </th>

                <th className="text-left p-3 text-black font-semibold">
                  Date
                </th>

                <th className="text-left p-3 text-black font-semibold">
                  Location
                </th>

                <th className="text-left p-3 text-black font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {events.map((item) => (
                <tr
                  key={item.event_id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 text-gray-800">
                    {item.Title}
                  </td>

                  <td className="p-3 text-gray-800">
                    {item.Date}
                  </td>

                  <td className="p-3 text-gray-800">
                    {item.location}
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() =>
                        editEvent(item)
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteEvent(
                          item.event_id
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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
    </div>
  );
}