import { ThreeDots } from "react-loader-spinner";
const Loading = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="65"
        width="65"
        color="rgb(var(--color-primary-900))"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          displas: "flex",
          justifyContent: "center",
        }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
