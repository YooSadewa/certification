import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarContent() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11)); // December 2024

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Sun", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: any) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {
      start: firstDay.getDay(),
      total: lastDay.getDate(),
    };
  };

  const navigateMonth = (direction: any) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + direction)
    );
  };

  const renderDays = () => {
    const { start, total } = getDaysInMonth(currentDate);
    const days = [];
    const adjustedStart = start === 0 ? 6 : start - 1; // Adjust for Monday start

    // Add empty cells for days before the 1st
    for (let i = 0; i < adjustedStart; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    // Add the actual days
    for (let i = 1; i <= total; i++) {
      days.push(
        <div
          key={i}
          className={`h-8 w-8 flex items-center justify-center rounded-full
            ${i === 23 ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          {i}
        </div>
      );
    }

    return days;
  };
  return (
    <div className="w-[45%] flex flex-col h-fit bg-white pb-[45px] rounded-[32px]">
      <div className="relative">
        <div className="w-full h-[75px] bg-black rounded-t-[32px] mb-[30px]">
          <div className="absolute left-8 -top-[24px] flex gap-[10px]">
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
          </div>
          <div className="absolute left-9 -top-[20px] flex gap-[18px]">
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
          </div>

          <div className="absolute right-8 -top-[24px] flex gap-[10px]">
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
            <div className="w-[23px] h-[80px] bg-[#E8E6E6] rounded-full" />
          </div>
          <div className="absolute right-9 -top-[20px] flex gap-[18px]">
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
            <div className="w-[15px] h-[70px] bg-black rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[30px] items-center my-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded-full bg-[#FF9F66] hover:bg-orange-400"
        >
          <ChevronLeft className="w-[25px] h-[25px]" />
        </button>

        <div className="font-semibold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>

        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded-full bg-[#415689] hover:bg-[#5F7EC8] text-white"
        >
          <ChevronRight className="w-[25px] h-[25px]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2 w-[80%] m-auto mt-[30px]">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 w-[80%] m-auto">
        {renderDays()}
      </div>
    </div>
  );
}
