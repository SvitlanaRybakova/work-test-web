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
      <CategorySlider />
      <Sidebar />
      <RestaurantGrid />
    </>
  );
}
