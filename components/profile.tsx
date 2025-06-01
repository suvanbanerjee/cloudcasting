"use client";

import { useAuth } from "../hooks/useAuth";
import { withAuth } from "../utils/withAuth";

const ProfileComponent = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
        <div className="p-8">
          <div className="flex items-center space-x-4">
            {user?.image && (
              <img
                src={user.image}
                alt={user.name || "Profile"}
                className="h-12 w-12 rounded-full"
              />
            )}
            <div>
              <h3 className="text-lg font-medium">{user?.name}</h3>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfileComponent);
