"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import DashboardNavbar from "@/app/components/DashboardNavbar";
import AddServiceModal from "@/app/components/AddServiceModal";


type Service = {
  id: string;
  name: string;
  url: string;
  status: "Active" | "Failed";
  lastPing: string;
};

const initialServices: Service[] = [
  { id: "1", name: "Portfolio API", url: "portfolio.onrender.com", status: "Active", lastPing: "2 minutes ago" },
  { id: "2", name: "Student Project", url: "student-api-.onrender.com", status: "Failed", lastPing: "12 minutes ago" },
];

const recentActivities = [
  { id: 1, message: "Portfolio API responded successfully", time: "2 min ago", success: true },
  { id: 2, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 3, message: "Blog API responded successfully", time: "20 min ago", success: true },
];

export default function DashboardPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [showAddModal, setShowAddModal] = useState(false);

  const active = services.filter((s) => s.status === "Active").length;
  const failed = services.filter((s) => s.status === "Failed").length;

  const handleAddService = (data: { name: string; url: string; interval: string }) => {
    setServices((prev) => [
      ...prev,
      { id: String(Date.now()), name: data.name, url: data.url, status: "Active", lastPing: "just now" },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0a0d13] text-white">
      <DashboardNavbar />

      <div className="px-4 md:px-8 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 md:mb-8">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Dashboard</h1>
            <p className="text-gray-400 text-xs md:text-sm mt-1">Monitor and keep your services awake</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs md:text-sm font-semibold px-3 md:px-5 py-2 md:py-2.5 rounded-md transition-colors whitespace-nowrap"
          >
            Add Service
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="bg-[#161b22] border border-white/10 rounded-lg p-4 md:p-5">
            <p className="text-gray-400 text-xs md:text-sm mb-1">Total Services</p>
            <p className="text-white text-2xl md:text-3xl font-bold">{services.length}</p>
          </div>
          <div className="bg-[#161b22] border border-white/10 rounded-lg p-4 md:p-5">
            <p className="text-gray-400 text-xs md:text-sm mb-1">Active</p>
            <p className="text-green-400 text-2xl md:text-3xl font-bold">{active}</p>
          </div>
          <div className="bg-[#161b22] border border-white/10 rounded-lg p-4 md:p-5">
            <p className="text-gray-400 text-xs md:text-sm mb-1">Failed</p>
            <p className="text-red-400 text-2xl md:text-3xl font-bold">{failed}</p>
          </div>
        </div>

        {/* Service Monitoring */}
        <div className="bg-[#161b22] border border-white/10 rounded-lg mb-6">
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10">
            <h2 className="text-white font-semibold text-sm md:text-base">Service Monitoring</h2>
            <Link href="/services" className="text-indigo-400 text-xs md:text-sm hover:underline">
              View all services
            </Link>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 text-sm font-normal px-6 py-3">Service</th>
                  <th className="text-left text-gray-400 text-sm font-normal px-6 py-3">URL</th>
                  <th className="text-left text-gray-400 text-sm font-normal px-6 py-3">Status</th>
                  <th className="text-left text-gray-400 text-sm font-normal px-6 py-3">Last Ping</th>
                  <th className="text-left text-gray-400 text-sm font-normal px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-white/5 last:border-0">
                    <td className="px-6 py-4 text-sm text-gray-300">{service.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{service.url}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={service.status === "Active" ? "text-green-400" : "text-red-400"}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{service.lastPing}</td>
                    <td className="px-6 py-4 text-sm">
                      <Link href="/services" className="text-indigo-400 hover:underline">Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-white/5">
            {services.map((service) => (
              <div key={service.id} className="px-4 py-4 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-medium">{service.name}</span>
                  <span className={`text-xs font-semibold ${service.status === "Active" ? "text-green-400" : "text-red-400"}`}>
                    {service.status}
                  </span>
                </div>
                <span className="text-xs text-gray-500 break-all">{service.url}</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">Last ping: {service.lastPing}</span>
                  <Link href="/services" className="text-indigo-400 text-xs hover:underline">Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#161b22] border border-white/10 rounded-lg">
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10">
            <h2 className="text-white font-semibold text-sm md:text-base">Recent Activities</h2>
            <Link href="/activities" className="text-indigo-400 text-xs md:text-sm hover:underline">
              View all Activities
            </Link>
          </div>
          <div className="px-4 md:px-6 py-4 flex flex-col gap-3 md:gap-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                {activity.success ? (
                  <CheckCircle size={15} className="text-green-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                )}
                <span className="text-xs md:text-sm text-gray-300 flex-1">{activity.message}</span>
                <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddServiceModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddService}
      />
    </div>
  );
}