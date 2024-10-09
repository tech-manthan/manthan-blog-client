import { AxiosError } from "axios";

interface ErrorData {
  location: string;
  msg: string;
  path: string;
  type: string;
}

interface ResponseData {
  errors: Array<ErrorData>;
}

const errorParser = (err: AxiosError) => {
  return (err.response?.data as ResponseData).errors[0];
};

export default errorParser;
