import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { FaCopy, FaDownload, FaStar, FaStarHalfAlt, FaRegStar, FaEye, FaSpinner } from 'react-icons/fa';

const fakeStatsData = [
  { views: '2.1M', rating: 4.8 },
  { views: '876K', rating: 4.5 },
  { views: '1.5M', rating: 4.7 },
  { views: '452K', rating: 4.3 },
  { views: '3.2M', rating: 4.9 },
  { views: '981K', rating: 4.6 },
  { views: '1.9M', rating: 4.8 },
  { views: '623K', rating: 4.4 },
  { views: '5.4M', rating: 4.9 },
  { views: '712K', rating: 4.5 },
  { views: '1.1M', rating: 4.6 },
  { views: '301K', rating: 4.2 },
  { views: '2.8M', rating: 4.8 },
  { views: '95K', rating: 3.9 },
  { views: '4.1M', rating: 4.9 },
];

declare global {
  interface Window {
    fluidPlayer?: (elementId: string, options?: any) => void;
  }
}

export function PlayVideo() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [videoTitle, setVideoTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [fakeStats, setFakeStats] = useState<{ views: string; rating: number } | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const randomUrls = [
    'https://otieu.com/4/10209209',
    'https://viiukuhe.com/dc/?blockID=406304',
    'https://jovial-fortune.com/cY2po8'
  ];

  useEffect(() => {
    const fetchVideoData = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/AgungDevlop/Viral/refs/heads/main/Video.json'
        );
        const data = await response.json();
        const video = data.find((item: { id: string }) => item.id === id);

        if (video) {
          document.title = video.Judul;
          setVideoUrl(video.Url);
          setVideoTitle(video.Judul);
          sessionStorage.setItem('videoUrl', video.Url);
          sessionStorage.setItem('videoTitle', video.Judul);
          const randomIndex = Math.floor(Math.random() * fakeStatsData.length);
          setFakeStats(fakeStatsData[randomIndex]);
        } else {
          setVideoTitle('Video not found');
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
        setVideoTitle('Failed to load video');
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id]);

  useEffect(() => {
    if (!loading && videoUrl && window.fluidPlayer) {
      const shouldAutoplay = searchParams.get('autoplay') === 'true';
      window.fluidPlayer('video-player', {
        layoutControls: {
          controlBar: { autoHideTimeout: 3, animated: true, autoHide: true },
          autoPlay: shouldAutoplay,
          mute: false,
          allowTheatre: true,
          playPauseAnimation: true,
          playbackRateEnabled: true,
          allowDownload: false,
          playButtonShowing: true,
          fillToContainer: true,
        }
      });
    }
  }, [loading, videoUrl, searchParams]);

  const handleCopy = () => {
    const linkToCopy = `https://${window.location.hostname}/v/?v=${id}`;
    navigator.clipboard.writeText(linkToCopy);
    alert('Verification link copied to clipboard!');
  };

  const handleDownloadClick = () => {
    if (isDownloading || !videoUrl) return;

    setIsDownloading(true);

    sessionStorage.setItem('videoUrl', videoUrl);
    sessionStorage.setItem('videoTitle', videoTitle);
    window.open('/download', '_blank');
    
    const randomAdUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
    setTimeout(() => {
      window.location.href = randomAdUrl;
    }, 2000);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }
  
  if (!videoUrl) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Video Not Found</h1>
            <p className="text-gray-600">The requested video could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-6 sm:py-10">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center break-words">
          {videoTitle}
        </h1>

        {fakeStats && (
          <div className="flex items-center justify-center gap-x-6 mb-4 text-gray-600">
            <div className="flex items-center gap-x-2">
              <FaEye />
              <span>{fakeStats.views} Views</span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center">{renderStars(fakeStats.rating)}</div>
              <span className="font-semibold">{fakeStats.rating}</span>
            </div>
          </div>
        )}

        <div className="w-full aspect-video bg-black rounded-lg shadow-xl overflow-hidden mb-5">
          <video id="video-player" className="w-full h-full" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm">
            <input
              type="text"
              value={`https://${window.location.hostname}/v/?v=${id}`}
              readOnly
              className="w-full p-3 bg-white text-gray-600 outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 transition-colors"
            >
              <FaCopy />
            </button>
          </div>

          <button
            onClick={handleDownloadClick}
            disabled={!videoUrl || isDownloading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-white py-3 px-4 rounded-lg flex items-center justify-center font-semibold shadow-md text-lg"
          >
            {isDownloading ? (
              <>
                <FaSpinner className="animate-spin mr-3" />
                Processing...
              </>
            ) : (
              <>
                <FaDownload className="mr-3" />
                Download Video
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
