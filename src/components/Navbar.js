import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/community">Community</Link>
      <Link href="/discover">Discover</Link>
      <Link href="/friends">Friends</Link>
      <Link href="/bookmark">Bookmark</Link>
    </nav>
  );
};

export default Navbar;