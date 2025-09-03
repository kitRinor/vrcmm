
export const extractErrMsg = (error: any): string => {
  return error.response?.data?.error?.message || "Unknown error";
};
