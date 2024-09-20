import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Video = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform redirect after some logic
    router.push('https://youtu.be/lrOmPZI_DIo');
  }, [router]);

  return <p>Redirecting...</p>;
};

export default Video;
