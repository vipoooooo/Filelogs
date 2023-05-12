import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image height={50} width={50} src="/logo.png" alt="logo" />
    </div>
  );
};

export default Loading;
