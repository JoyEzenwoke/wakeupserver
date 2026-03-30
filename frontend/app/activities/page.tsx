import { CheckCircle, XCircle } from "lucide-react";
import DashboardNavbar from "@/app/components/DashboardNavbar";

const activities = [
  { id: 1, message: "Portfolio API responded successfully", time: "2 min ago", success: true },
  { id: 2, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 3, message: "Blog API responded successfully", time: "20 min ago", success: true },
  { id: 4, message: "Portfolio API created successfully", time: "2 min ago", success: true },
  { id: 5, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 6, message: "Blog API responded successfully", time: "20 min ago", success: true },
  { id: 7, message: "Portfolio API responded successfully", time: "2 min ago", success: true },
  { id: 8, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 9, message: "Blog API responded successfully", time: "20 min ago", success: true },
  { id: 10, message: "Portfolio API responded successfully", time: "2 min ago", success: true },
  { id: 11, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 12, message: "Blog API deleted successfully", time: "20 min ago", success: true },
  { id: 13, message: "Portfolio API responded successfully", time: "2 min ago", success: true },
  { id: 14, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 15, message: "Blog API responded successfully", time: "20 min ago", success: true },
  { id: 16, message: "Portfolio API created successfully", time: "2 min ago", success: true },
  { id: 17, message: "Student Project failed to respond", time: "10 min ago", success: false },
  { id: 18, message: "Blog API deleted successfully", time: "20 min ago", success: true },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0d13] text-white">
      <DashboardNavbar />

      <div className="px-4 md:px-8 py-6 md:py-8">
        <div className="bg-[#161b22] border border-white/10 rounded-lg px-4 md:px-6 py-5 md:py-6">
          <h2 className="text-white font-semibold text-sm md:text-base mb-5 md:mb-6">Activities</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {activities.map((activity) => (
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
    </div>
  );
}