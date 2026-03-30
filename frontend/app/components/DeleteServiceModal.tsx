"use client";

import { AlertTriangle } from "lucide-react";

interface Service {
  id: string;
  name: string;
  url: string;
  status: "Active" | "Failed";
  lastPing: string;
}

interface DeleteServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onConfirm: (service: Service) => void;
}

export default function DeleteServiceModal({ service, onClose, onConfirm }: DeleteServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#0d1117] border border-white/10 rounded-lg w-full max-w-lg p-6 md:p-10 flex flex-col items-center text-center">
        <AlertTriangle className="text-red-500 mb-4" size={48} />

        <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Delete Service?</h2>
        <p className="text-gray-300 text-sm md:text-base mb-8 md:mb-10">
          Are you sure you want to delete &quot;{service.name}&quot;?{" "}
          <br className="hidden sm:block" />
          This action cannot be undone.
        </p>

        <div className="flex gap-3 md:gap-4 w-full">
          <button
            onClick={onClose}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(service)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}