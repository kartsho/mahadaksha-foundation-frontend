import { Outlet } from "react-router-dom";
import CareerTabs from "../component/CareerTabs/CareerTabs";
import Team from "../component/Team/Team";
const CareerLayout = () => {
  return (
    <div className="min-h-screen bg-[#09090f] text-white">

      {/* Hero */}

      <div className="h-72 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center relative">

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Join Our Team
          </h1>
        </div>

      </div>

      {/* Tabs */}

      <CareerTabs />

      {/* Page */}
      <div className="max-w-7xl mx-auto px-5 pt-16">
    <Team />
    </div>

      <div className="max-w-7xl mx-auto py-10 px-5">
        <Outlet />
      </div>

    </div>
  );
};

export default CareerLayout;