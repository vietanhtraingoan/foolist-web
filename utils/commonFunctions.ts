import { useRouter } from "next/router";

export const getUrlParams = (param: string) => {
  const router = useRouter();
  let valueUrl = router.query[param];
  return valueUrl;
};
