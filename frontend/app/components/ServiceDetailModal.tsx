"use client";

interface Service {
  id: string;
  name: string;
  url: string;
  status: "Active" | "Failed";
  lastPing: string;
}

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onDelete: (service: Service) => void;
  onEdit: (service: Service) => void;
}

export default function ServiceDetailModal({ service, onClose, onDelete, onEdit }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#0d1117] border border-white/10 rounded-lg w-full max-w-lg p-6 md:p-10">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">{service.name}</h2>

        <p className="text-white font-semibold mb-3 text-sm md:text-base break-all">
          Service URL: <span className="font-normal text-gray-300">{service.url}</span>
        </p>
        <p className="text-white font-semibold mb-3 text-sm md:text-base">
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
            onClick={() => onDelete(service)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(service)}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors text-sm md:text-base"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}