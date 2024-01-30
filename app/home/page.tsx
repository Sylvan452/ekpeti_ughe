import MovieVideo from '../components/MovieVideo';
import Navbar from '../components/NavBar';
import RecentlyAdded from '../components/RecentltAdded';

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-2xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
}
