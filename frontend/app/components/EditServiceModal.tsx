"use client";

import { useState, useEffect } from "react";

interface Service {
  id: string;
  name: string;
  url: string;
  status: "Active" | "Failed";
  lastPing: string;
}

interface EditServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSave: (updated: Service) => void;
}

export default function EditServiceModal({ service, onClose, onSave }: EditServiceModalProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (service) {
      setName(service.name);
      setUrl(service.url);
    }
  }, [service]);

  if (!service) return null;

  const handleSave = () => {
    onSave({ ...service, name, url });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#0d1117] border border-white/10 rounded-lg w-full max-w-lg p-6 md:p-10">
        <div className="mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#161b22] border border-white/20 rounded-md px-4 py-3 text-white text-lg md:text-xl font-bold outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-white font-semibold text-sm md:text-base block mb-1">Service URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-[#161b22] border border-white/20 rounded-md px-3 py-2 text-gray-300 text-sm outline-none focus:border-indigo-500"
          />
        </div>

        <p className="text-white font-semibold mb-2 text-sm md:text-base">
          Status:{" "}
          <span className={service.status === "Active" ? "text-green-400" : "text-red-400"}>
            {service.status}
          </span>
        </p>
        <p className="text-white font-semibold mb-8 md:mb-10 text-sm md:text-base">
          Last Ping {service.lastPing}
        </p>

        <div className="flex gap-3 md:gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}