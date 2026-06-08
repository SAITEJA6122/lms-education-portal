"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import StatsCard from "@/components/admin/StatsCard";
import DashboardCard from "@/components/admin/DashboardCard";

export default function DashboardPage() {
  const [newsCount, setNewsCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);
  const [enquiriesCount, setEnquiriesCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const news = await supabase
      .from("News")
      .select("*", { count: "exact", head: true });

    const events = await supabase
      .from("Events")
      .select("*", { count: "exact", head: true });

    const faculty = await supabase
      .from("Faculty")
      .select("*", { count: "exact", head: true });

    const enquiries = await supabase
      .from("Enquiries")
      .select("*", { count: "exact", head: true });

    setNewsCount(news.count || 0);
    setEventsCount(events.count || 0);
    setFacultyCount(faculty.count || 0);
    setEnquiriesCount(enquiries.count || 0);
  }

return (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold text-slate-900">
        Dashboard Overview
      </h1>

      <p className="text-slate-500 mt-2">
        Welcome back, Super Admin.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="News"
        value={newsCount}
      />

      <StatsCard
        title="Events"
        value={eventsCount}
      />

      <StatsCard
        title="Faculty"
        value={facultyCount}
      />

      <StatsCard
        title="Enquiries"
        value={enquiriesCount}
      />
    </div>

    <DashboardCard title="Recent Activities">
      <p className="text-slate-500">
        Activity tracking will be connected
        after CRUD modules are completed.
      </p>
    </DashboardCard>
  </div>
);
}
