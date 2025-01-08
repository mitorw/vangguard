import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl">
        {/* Header Profil */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24">
            <Image
              src="" // source gambar avatar pengguna
              alt="User Avatar"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Budi</h2>
            <p className="text-sm text-gray-500">budi@gmail.com</p>
            <p className="mt-1 text-gray-600">
              Member since: January 2024
            </p>
          </div>
        </div>

       

        

        
      </div>
    </div>
  );
}
