import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });
  const { categories: rawCategories = [] } = data || {};
  // Note: SET MANUALLY FOR NOW DUE TO API PROBLEM
  // rawCategories.categories = [
  //   {
  //     // _id: "653cea57fc95582069ed806f",
  //     _id: "66015ba12b9267ebd323f8d9",
  //     title: "Programming",
  //   },
  //   {
  //     _id: "66015bd02b9267ebd323f8da",
  //     title: "ui",
  //   },
  // ];
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
