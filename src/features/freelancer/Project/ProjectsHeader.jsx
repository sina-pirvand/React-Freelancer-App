import FilterDropDown from "../../../common/FilterDropDown.jsx";
import useCategories from "../../../hooks/useCategories.js";

const ProjectHeader = () => {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="ps-4 font-bold text-3xl text-secondary-900">پروژه ها</h1>
      <div>
        {/* .../.../?category="..." */}
        <FilterDropDown
          filterField="categoty"
          options={[
            { label: "دسته بندی (همه)", value: "ALL" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
