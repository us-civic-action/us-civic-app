
import { Pill } from "@/types";

export default function SmartPill({ pill }: { pill: Pill }) {
    const styles = {
        urgency: "bg-red-50 text-red-700 border-red-100",
        impact: "bg-purple-50 text-purple-700 border-purple-100",
        people: "bg-teal-50 text-teal-700 border-teal-100",
        process: "bg-blue-50 text-blue-700 border-blue-100",
        politics: "bg-gray-50 text-gray-700 border-gray-100",
    };

    return (
        <span
            className={`text-xs font-bold px-3 py-1 rounded-full border gap-1 flex items-center whitespace-nowrap ${styles[pill.category] || "bg-gray-50 text-gray-600"
                }`}
            title={pill.description}
        >
            {pill.icon && <span>{pill.icon}</span>}
            {pill.label}
        </span>
    );
}
