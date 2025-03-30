import { useState } from "react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-4 bg-black text-white flex items-center justify-between">
      <div className="font-bold text-xl">CloudCasting</div>

      <div className="relative">
        <button
          onClick={togglePopup}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 transition"
          aria-label="User menu"
        >
          <User size={20} />
        </button>

        {showPopup && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
            
            <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
              Links
            </div>
            <a
              href="https://documentation.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Documentation
            </a>
            <a
              href="https://contact.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <a
              href="https://feedback.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Give feedback
            </a>

            <hr className="my-2 border-gray-200" />

            {/* Footer */}
            <div className="px-4 py-2 text-xs text-gray-500">
              Version 0.0.1
            </div>
            <div className="px-4 py-2 text-xs text-gray-500">
              Signed in as <br />
              <span className="font-medium">useremail@example.com</span>
            </div>

            <hr className="my-2 border-gray-200" />
            <button
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.setItem("isLoggedIn", "false");
                }
                router.push("/login");
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;