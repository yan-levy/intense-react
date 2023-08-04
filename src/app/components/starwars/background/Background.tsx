import Image from "next/image";

export default function Background() {
  return (
    <Image
      src={"https://wallpaperaccess.com/full/11801.jpg"}
      alt="background"
      fill
      className="opacity-30 object-cover -z-50"
    />
  );
}
