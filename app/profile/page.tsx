"use client";

import Header from '@/components/navbar';
import { withAuth } from '@/utils/withAuth';
import { useAuth } from '@/hooks/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="flex flex-col items-center">
                {user?.image ? (
                  <img 
                    src={user.image} 
                    alt={user.name || "Profile"} 
                    className="h-24 w-24 rounded-full mb-4"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <span className="text-2xl">{user?.name?.[0] || '?'}</span>
                  </div>
                )}
                
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{user?.name || "User"}</h2>
                  <p className="text-gray-600">{user?.email || "No email provided"}</p>
                  <p className="text-gray-500 mt-2">User ID: {user?.id || "Unknown"}</p>
                </div>
                
                <div className="border-t w-full my-6"></div>
                
                <div className="w-full">
                  <h3 className="text-lg font-medium mb-3">Account Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user?.email || "None"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Authentication Provider</p>
                      <p className="font-medium">Auth0</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Account Created</p>
                      <p className="font-medium">Contact Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);
