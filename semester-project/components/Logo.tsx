import { cn } from "@/lib/utils";
import Image from "next/image";
import image from "@/public/logo/Car Logo.jpg";

const Logo = () => (
    <div className="flex items-center justify-start max-w-min gap-2">
      <img
        src={"/logo/Car_Logo.jpg"}
        alt="Logo"
        width="123.57"
        height="78"
        style={{ borderRadius: '20px' }}
      />
      <span className="font-unlock font-bold text-3xl whitespace-nowrap">
        CAR(E)
      </span>
    </div>
  );
  
  export default Logo;