interface ErrorProps {
  errorText: string;
}

const ErrorText = ({ errorText }: ErrorProps) => {
  return <p className="text-red/85">{errorText}</p>;
};

export default ErrorText;
