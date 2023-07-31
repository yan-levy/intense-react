import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li className="flex justify-stretch p-4 gap-6">
            <div className="flex justify-center items-center font-black text-2xl pr-5">
              <Link href="/" className="hover:opacity-80 text-blue-200">
                Home
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="font-black">Basics</h1>
              <Link href={"pages/basics/circle"} className="hover:opacity-80">
                Circle
              </Link>
              <Link href={"pages/basics/event"} className="hover:opacity-80">
                Event
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black">Communication</h1>
              <Link
                href={"pages/communication/direct"}
                className="hover:opacity-80"
              >
                Direct
              </Link>
              <Link
                href={"pages/communication/indirect"}
                className="hover:opacity-80"
              >
                Indirect
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black">Hooks</h1>
              <Link href={"pages/hooks/images"} className="hover:opacity-80">
                Images
              </Link>
            </div>
            <div>
              <h1 className="font-black">Conditional</h1>
              <Link
                href={"pages/conditional/quiz"}
                className="hover:opacity-80"
              >
                Quiz
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black">Lists</h1>
              <Link href={"pages/lists/basic"} className="hover:opacity-80">
                Basic
              </Link>
              <Link href={"pages/lists/products"} className="hover:opacity-80">
                Products
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <hr className="border-zinc-700" />
    </div>
  );
}

export default Navbar;
