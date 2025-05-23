import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <h1>Hello</h1>
    </div>
  );
}
