import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ label, date, setDate }) => {
  return (
    <div>
      <span className="block font-bold text-secondary-500/80 my-3 text-xl">
        {label}
      </span>
      <DatePicker
        containerClassName="w-full"
        inputClass="bg-primary-100/40 w-full p-3 rounded-lg"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </div>
  );
};

export default DatePickerField;
