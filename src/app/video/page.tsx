"use client"; // Mark this component as a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use from 'next/navigation' in the App Router

const Video = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external URL
    router.push('https://youtu.be/lrOmPZI_DIo');
  }, [router]);

  return <p>Redirecting...</p>; // Optional message during redirection
};

export default Video;
