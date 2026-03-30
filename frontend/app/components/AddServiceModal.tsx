"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: { name: string; url: string; interval: string }) => void;
}

export default function AddServiceModal({ isOpen, onClose, onSave }: AddServiceModalProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState("5 Minutes");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ name, url, interval });
    setName("");
    setUrl("");
    setInterval("5 Minutes");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#0d1117] border border-white/10 rounded-lg w-full max-w-lg p-6 md:p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={20} />
        </button>

        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Add New Service</h2>

        <div className="mb-5">
          <label className="block text-gray-300 mb-2 text-sm">Service Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#161b22] border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 mb-2 text-sm">Service URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-[#161b22] border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-300 mb-2 text-sm">Ping Interval</label>
          <select
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            className="w-full bg-[#161b22] border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option>1 Minute</option>
            <option>5 Minutes</option>
            <option>10 Minutes</option>
            <option>30 Minutes</option>
            <option>1 Hour</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors"
        >
          Save Service
        </button>
      </div>
    </div>
  );
}