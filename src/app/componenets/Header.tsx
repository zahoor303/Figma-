import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-[#252B42] p-4 flex justify-between items-center shadow-md max-w-screen-xl mx-auto">
      {/* Brand Name */}
      <div className="text-xl font-bold ml-32 text-white">BrandName</div>
     
      {/* Navigation Links */}
      <nav className="flex space-x-10 text-white text-sm">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/products" className="hover:text-gray-300">Products</Link>
        <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>

      {/* Login and Signup Buttons */}
      <div className="flex space-x-8">
        <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
        <Link href="/signup" className="bg-[#23A6F0] text-white font-bold py-2 px-4 rounded hover:bg-[#23A6F0]">
          JOIN US
        </Link>
      </div>
    </header>
  );
}
