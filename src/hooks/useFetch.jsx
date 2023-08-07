import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://hotarudesign.microcms.io/api/v1/";

//posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/achievement`);
};
