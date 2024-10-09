type DividerProps = {
  orientation?: "vertical" | "horizontal";
};

const Divider = ({ orientation = "horizontal" }: DividerProps) => {
  return (
    <div
      className={`flex justify-center items-center ${
        orientation == "horizontal" && "flex-col"
      }`}
    >
      <hr
        className={`w-full text-grey border ${
          orientation == "horizontal" ? "my-2" : "mx-2"
        }`}
      />
    </div>
  );
};

export default Divider;
