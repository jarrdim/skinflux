import { FC, ReactNode } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

interface LayoutAProps {
  children: ReactNode;
}

const LayoutA: FC<LayoutAProps> = ({ children }) => {
  return (
    <div className={`${poppins.className} relative bg-cover bg-center bg-no-repeat min-h-screen`} style={{ backgroundImage: "url('/womanop.png')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative bg-gray-300 rounded-md md:w-[400px] px-6 m-auto p-8 mt-32">
        {children}
      </div>
    </div>
  );
};

export default LayoutA;
