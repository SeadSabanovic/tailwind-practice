export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 fixed w-full bg-white border-b z-50 h-16">
      <h1 className="text-gray-600 font-bold uppercase hover:text-gray-800">
        <a href="">Logo</a>
      </h1>
      <ul className="flex gap-4">
        <li>
          <span>
            <a href="">Home</a>
          </span>
        </li>
        <li>
          <span>
            <a href="">About</a>
          </span>
        </li>
        <li>
          <span>
            <a href="">Contact</a>
          </span>
        </li>
      </ul>
    </nav>
  );
}
