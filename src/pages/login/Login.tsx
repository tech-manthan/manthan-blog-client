import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { Button, InputBox, ErrorText } from "../../components/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getSelf, handleSocialAuthentication, loginUser } from "../../api";
import { useAppDispatch } from "../../store";
import { addUser } from "../../store/slices/userSlice";
import { UserData } from "../../types/sliceTypes";
import { errorParser } from "../../utils";
import { AxiosError } from "axios";
import { SocialAuth } from "../../types/crendentialTypes";

const schema = yup
  .object({
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, {
        message:
          "password must have  atleast 1 digit, 1 lowercase & 1 uppercase letter & must be of length 6-20 ",
      })
      .required(),
  })
  .required();
type LoginFormData = yup.InferType<typeof schema>;

const Login = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { refetch } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    enabled: false,
  });

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      const selfData = await refetch();

      dispatch(addUser((selfData.data as UserData).user));
      toast.success("login success", {});
    },
    onError: async (err) => {
      toast.error(errorParser(err as AxiosError).msg);
    },
  });

  const onSubmit = ({ email, password }: LoginFormData) => {
    mutate({ email, password });
  };

  return (
    <div className="mx-8 min-[468px]:w-[400px] min-[468px]:mx-auto mt-8 border border-grey rounded-md p-5 my-5">
      <h3 className="text-center font-extrabold">LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          // register={}
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          iconName="envelope"
          register={register("email")}
        />
        <ErrorText errorText={errors.email?.message || ""} />
        <InputBox
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          iconName="key"
          register={register("password")}
        />
        <ErrorText errorText={errors.password?.message || ""} />

        <div className="flex flex-col min-[400px]:flex-row min-[400px]:justify-between gap-1">
          <Link to={"/nonauth/register"} className="text-twitter">
            Don't have an account?
          </Link>
          <Link to={"/nonauth/forgot-password"} className="text-red">
            Forgot Password?
          </Link>
        </div>

        <Button onClick={() => {}} text="Login" variant="dark" width="full" />
      </form>

      <hr className="w-full border border-grey" />
      <div className="flex justify-between items-center gap-4">
        <Button
          onClick={() => {
            handleSocialAuthentication(SocialAuth.google);
          }}
          brand={"google"}
          variant="dark"
          width="full"
        />
        <Button
          onClick={() => {
            handleSocialAuthentication(SocialAuth.github);
          }}
          brand={"github"}
          variant="dark"
          width="full"
        />
      </div>
    </div>
  );
};

export default Login;
