import CategorySlider from '@/components/categorySlider/CategorySlider';
import Sidebar from '@/components/filter/Sidebar';
import MobileOnboarding from '@/components/MobileOnboarding';
import Navbar from '@/components/Navbar';
import RestaurantGrid from '@/components/restaurant/RestaurantGrid';

export default function Home() {
  return (
    <>
      <MobileOnboarding />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-6 md:px-10">
          <CategorySlider />
          <RestaurantGrid />
        </main>
      </div>
    </>
  );
}
