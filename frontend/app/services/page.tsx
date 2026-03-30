"use client";

import { useState } from "react";
import DashboardNavbar from "@/app/components/DashboardNavbar";
import ServiceDetailModal from "@/app/components/ServiceDetailModal";
import EditServiceModal from "@/app/components/EditServiceModal";
import DeleteServiceModal from "@/app/components/DeleteServiceModal";

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
  { id: "3", name: "Portfolio API", url: "portfolio.onrender.com", status: "Active", lastPing: "2 minutes ago" },
  { id: "4", name: "Student Project", url: "student-api-.onrender.com", status: "Failed", lastPing: "12 minutes ago" },
  { id: "5", name: "Portfolio API", url: "portfolio.onrender.com", status: "Active", lastPing: "2 minutes ago" },
  { id: "6", name: "Student Project", url: "student-api-.onrender.com", status: "Failed", lastPing: "12 minutes ago" },
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [editService, setEditService] = useState<Service | null>(null);
  const [deleteService, setDeleteService] = useState<Service | null>(null);

  const handleEdit = (service: Service) => {
    setSelectedService(null);
    setEditService(service);
  };

  const handleDelete = (service: Service) => {
    setSelectedService(null);
    setDeleteService(service);
  };

  const handleSaveEdit = (updated: Service) => {
    setServices((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
    setEditService(null);
  };

  const handleConfirmDelete = (service: Service) => {
    setServices((prev) => prev.filter((s) => s.id !== service.id));
    setDeleteService(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0d13] text-white">
      <DashboardNavbar />

      <div className="px-4 md:px-8 py-6 md:py-8">
        <div className="bg-[#161b22] border border-white/10 rounded-lg">
          <div className="px-4 md:px-6 py-4 border-b border-white/10">
            <h2 className="text-white font-semibold text-sm md:text-base">Service Monitoring</h2>
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
                      <button onClick={() => setSelectedService(service)} className="text-indigo-400 hover:underline">
                        Details
                      </button>
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
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-indigo-400 text-xs hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <EditServiceModal
        service={editService}
        onClose={() => setEditService(null)}
        onSave={handleSaveEdit}
      />
      <DeleteServiceModal
        service={deleteService}
        onClose={() => setDeleteService(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}