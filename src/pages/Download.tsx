import { FaDownload } from 'react-icons/fa';

export function Download() {
  const videoUrl = sessionStorage.getItem('videoUrl');
  const videoTitle = sessionStorage.getItem('videoTitle');

  const randomUrls = [
    'https://otieu.com/4/10209209',
    'https://viiukuhe.com/dc/?blockID=406304',
    'https://jovial-fortune.com/cY2po8'
  ];
  
  const handleDownload = () => {
    if (videoUrl) {
      // Buka URL video di tab baru
      window.open(videoUrl, '_blank');

      // Redirect tab saat ini ke URL acak setelah 2 detik
      setTimeout(() => {
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.location.href = randomUrl;
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-gray-50 p-4 py-10">
      <div className="w-full max-w-md text-center bg-white rounded-xl shadow-xl p-8 sm:p-10">
        <FaDownload className="text-5xl text-green-500 mx-auto mb-5" />
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Download Video
        </h1>
        
        {videoTitle && (
          <p className="text-md text-gray-500 mb-6 truncate" title={videoTitle}>
            {videoTitle}
          </p>
        )}

        {videoUrl ? (
          <>
            <p className="text-gray-600 mb-8">
              Click the button below to start. The video will open in a new tab for you to save.
            </p>
            <button
              onClick={handleDownload}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Start Download
            </button>
          </>
        ) : (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-left" role="alert">
            <p className="font-bold">Error</p>
            <p>No video URL available. Please return to the player and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}
