import { cn } from "@/lib/utils";
import Image from "next/image";
import image from "@/public/logo/Car Logo.jpg";

const Logo = () => (
    <div className="flex items-center justify-center gap-2">
      <img
        src={"/logo/Car_Logo.jpg"}
        alt="Logo"
        width="123.57"
        height="78"
        style={{ borderRadius: '20px' }}
      />
      <span
      className={cn(
        "font-sarpanch text-3xl whitespace-nowrap",
        { "text-brand-blue-50": true }
      )}
    >
      CAR(E)
    </span>
    </div>
  );
  
  export default Logo;