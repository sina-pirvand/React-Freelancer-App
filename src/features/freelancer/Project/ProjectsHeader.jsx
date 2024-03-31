import Filter from "../../../common/Filter/index.jsx";
import FilterDropDown from "../../../common/FilterDropDown.jsx";
import useCategories from "../../../hooks/useCategories.js";

const sortOptions = [
  {
    label: "جدید ترین",
    // VALUE NAMES BASED ON BACKEND
    value: "latest",
  },
  {
    label: "قدیمی ترین",
    value: "earliest",
  },
];
const statusOptions = [
  {
    label: "همه",
    // VALUE NAMES BASED ON BACKEND
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const ProjectHeader = () => {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="ps-4 font-bold text-3xl text-secondary-900">پروژه ها</h1>
      <div className="flex items-center gap-x-4">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />

        {/* .../.../?category="..." */}
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
