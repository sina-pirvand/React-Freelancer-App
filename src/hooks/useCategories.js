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
      _id: 1,
      title: "فرانت اند",
    },
    {
      _id: 2,
      title: "بک اند",
    },
    {
      _id: 3,
      title: "فول استک",
    },
    {
      _id: 4,
      title: "طراحی UI",
    },
  ];

  const categories = rawCategories.categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
};

export default useCategories;
