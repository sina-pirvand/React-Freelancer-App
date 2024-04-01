import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value; // STH or ALL

  const handleClick = (itemValue) => {
    searchParams.set(filterField, itemValue);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs border border-secondary-300 px-2 rounded-xl text-secondary-500 bg-secondary-0">
      <span className="text-[0.9rem] font-bold">وضعیت:</span>
      <div className="flex items-center gap-x-2  p-1.5 ">
        {options.map((item) => {
          const isActive = item.value === currentFilter;
          return (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              disabled={isActive}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
              ${isActive ? "!bg-primary-900 text-white" : ""}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
