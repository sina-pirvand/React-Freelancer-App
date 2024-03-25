import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });
  const { categories: rawCategories = [] } = data || {};
  //Note: SET MANUALLY FOR NOW DUE TO API PROBLEM
  rawCategories.categories = [
    {
      _id: "653cea57fc95582069ed806f",
      title: "برنامه نویسی",
    },
  ];

  const categories = rawCategories.categories?.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories?.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
};

export default useCategories;
