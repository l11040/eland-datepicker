// components/CalendarPopup.tsx
import { useRef, useState } from "react";
import CalendarView from "./CalendarView";
import { useOutsideClick } from "../_hooks/useOutsideClick";
import { CalendarPopupProps } from "../types";

export default function CalendarPopup({
  customInput,
  ...props
}: CalendarPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => setIsOpen(false));

  return (
    <div className="relative w-fit" ref={wrapperRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{customInput}</div>
      {isOpen && (
        <div className="absolute z-50 mt-1 shadow-xl ">
          <CalendarView {...props} />
        </div>
      )}
    </div>
  );
}
