import { bookingStatus } from "app/_models/IBooking";

interface IBookingStatusDropdownProps {
  value: bookingStatus;
  onChange: (status: bookingStatus) => void;
}

export default function ReviewRequestBookingStatus({
  value,
  onChange,
}: IBookingStatusDropdownProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as bookingStatus);
  };

  return (
    <select value={value} onChange={handleStatusChange}>
      {Object.values(bookingStatus).map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
