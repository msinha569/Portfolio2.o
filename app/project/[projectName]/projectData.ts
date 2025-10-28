export const projectData = {
  linkedinClone: {
    title: "LinkedIn Clone - Professional Networking Platform",
    desc: "A full-featured LinkedIn clone built with the MERN stack, featuring advanced user authentication, real-time notifications, responsive design, and comprehensive profile management. Users can create posts, interact with content, manage their professional profiles, and receive email notifications for important activities.",
    img: "/linkedin-clone.png",
    github: process.env.NEXT_PUBLIC_LINKEDIN_CLONE_REPO || "https://github.com/msinha569/linkedin-clone",
    live: process.env.NEXT_PUBLIC_LINKEDIN_CLONE_URL || "https://unlinkedd.mksinha.info/",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Nodemailer",
      "Tailwind CSS",
    ],
    details: [
      "Built complete authentication system with JWT tokens and secure password hashing",
      "Implemented real-time email notifications for user interactions and updates",
      "Created responsive UI with Tailwind CSS supporting all device sizes",
      "Developed comprehensive profile management with image uploads and professional details",
      "Built post creation, editing, and interaction features (likes, comments, shares)",
      "Implemented connection requests and network building functionality",
      "Optimized database queries with MongoDB indexing for faster performance",
      "Added search functionality to discover users and content across the platform",
    ],
    code: `import { useState, useEffect } from 'react';
import axios from 'axios';

function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts', {
          headers: {
            'Authorization': \`Bearer \${localStorage.getItem('token')}\`
          }
        });
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      await axios.post(\`/api/posts/\${postId}/like\`, {}, {
        headers: {
          'Authorization': \`Bearer \${localStorage.getItem('token')}\`
        }
      });
      // Update UI after successful like
      setPosts(posts.map(post => 
        post._id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      ));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // See GitHub for complete implementation
  return (
    <div className="feed-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        posts.map(post => (
          <PostCard 
            key={post._id} 
            post={post} 
            onLike={handleLike}
          />
        ))
      )}
    </div>
  );
}`,
  },
  
  photozone: {
    title: "PhotoZone - AI-Powered Image Manipulation",
    desc: "An advanced image manipulation platform leveraging Cloudinary API for AI-powered features including generative fill, intelligent background removal, image restoration, and object manipulation. Built with Next.js for optimal performance and user experience.",
    img: "/photozone.png",
    github: process.env.NEXT_PUBLIC_PHOTOZONE_REPO || "https://github.com/msinha569/photozone",
    live: process.env.NEXT_PUBLIC_PHOTOZONE_URL || "https://your-photozone-link.com",
    techStack: [
      "Next.js",
      "TypeScript",
      "Cloudinary API",
      "RemoveBG API",
      "React Hook Form",
      "Clerk Auth",
      "MongoDB",
      "Tailwind CSS",
      "Zod",
    ],
    details: [
      "Integrated Cloudinary's AI-powered generative fill to expand and complete images intelligently",
      "Implemented one-click background removal using RemoveBG API with high accuracy",
      "Built image restoration feature to enhance and repair old or damaged photos",
      "Created object removal and recoloring tools for precise image editing",
      "Designed user authentication system with Clerk for secure access management",
      "Developed form validation using React Hook Form and Zod for data integrity",
      "Stored user projects and edit history in MongoDB for seamless workflow",
      "Optimized image processing pipeline to reduce API calls and improve response times",
    ],
    code: `'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const imageSchema = z.object({
  image: z.string().url('Please upload a valid image'),
  operation: z.enum(['generative-fill', 'remove-bg', 'restore', 'recolor']),
});

export default function ImageEditor() {
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(imageSchema),
  });

  const onSubmit = async (data) => {
    setProcessing(true);
    try {
      const response = await fetch('/api/process-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResult(result.processedImage);
    } catch (error) {
      console.error('Image processing failed:', error);
    } finally {
      setProcessing(false);
    }
  };

  // Check GitHub for full component implementation
  return (
    <div className="editor-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form fields */}
      </form>
      {result && <ImagePreview src={result} />}
    </div>
  );
}`,
  },

  shortsGen: {
    title: "Shorts Generation - AI Video Creator",
    desc: "One-click AI-powered video generation platform that creates complete short-form videos. Integrates multiple AI services including Gemini for content generation, Assembly AI for transcription, Pexels for stock footage, ElevenLabs for voice synthesis, and Remotion for video rendering.",
    img: "/shorts-gen.png",
    github: process.env.NEXT_PUBLIC_SHORTS_GEN_REPO || "https://github.com/msinha569/shorts-generation",
    live: process.env.NEXT_PUBLIC_SHORTS_GEN_URL || "https://your-shorts-gen-link.com",
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Assembly AI",
      "Pexels API",
      "Remotion",
      "ElevenLabs API",
      "Clerk Auth",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    details: [
      "Developed one-click video generation combining 5 different AI APIs seamlessly",
      "Used Gemini API to generate engaging scripts and content ideas automatically",
      "Integrated Assembly AI for accurate speech-to-text transcription and timing",
      "Leveraged Pexels API to source relevant stock footage matching video content",
      "Implemented ElevenLabs API for realistic text-to-speech voice generation",
      "Built video rendering pipeline with Remotion for programmatic video creation",
      "Designed PostgreSQL database with Drizzle ORM for efficient data management",
      "Created user authentication and project management system with Clerk",
      "Optimized API rate limiting and caching to reduce costs and improve speed",
    ],
    code: `import { useState } from 'react';
import { generateScript } from '@/lib/gemini';
import { transcribe } from '@/lib/assembly';
import { getFootage } from '@/lib/pexels';
import { generateVoice } from '@/lib/elevenlabs';
import { renderVideo } from '@/lib/remotion';

export default function VideoGenerator() {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generateVideo = async (topic: string) => {
    setGenerating(true);
    
    try {
      // Step 1: Generate script
      setProgress(20);
      const script = await generateScript(topic);
      
      // Step 2: Generate voiceover
      setProgress(40);
      const audio = await generateVoice(script);
      
      // Step 3: Get relevant footage
      setProgress(60);
      const footage = await getFootage(script.keywords);
      
      // Step 4: Render video
      setProgress(80);
      const video = await renderVideo({
        script,
        audio,
        footage,
      });
      
      setProgress(100);
      return video;
    } catch (error) {
      console.error('Video generation failed:', error);
    } finally {
      setGenerating(false);
    }
  };

  // See full implementation on GitHub
}`,
  },

  "3dPortfolio": {
    title: "3D Portfolio - Interactive Experience",
    desc: "An immersive 3D portfolio showcasing projects in a gamified, interactive environment. Built with React Three Fiber for stunning 3D graphics and smooth animations, providing visitors with a unique and memorable way to explore work and skills.",
    img: "/3d-portfolio.png",
    github: process.env.NEXT_PUBLIC_3D_PORTFOLIO_REPO || "https://github.com/msinha569/3d-portfolio",
    live: process.env.NEXT_PUBLIC_3D_PORTFOLIO_URL || "https://your-3d-portfolio-link.com",
    techStack: [
      "React",
      "React Three Fiber",
      "Three.js",
      "Drei",
      "Tailwind CSS",
      "Framer Motion",
    ],
    details: [
      "Created fully interactive 3D environment with smooth camera controls",
      "Designed custom 3D models and animations for project showcases",
      "Implemented physics-based interactions for realistic object behavior",
      "Built responsive 3D scenes that adapt to different screen sizes",
      "Optimized 3D rendering performance for smooth 60 FPS experience",
      "Added post-processing effects for enhanced visual quality",
      "Integrated Framer Motion for seamless 2D/3D UI transitions",
      "Created gamified navigation system for exploring portfolio sections",
    ],
    code: `import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={10}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectShowcase />
        <Environment />
      </Suspense>
    </Canvas>
  );
}

function ProjectShowcase() {
  return (
    <group>
      {/* 3D project displays */}
    </group>
  );
}

// Full code available on GitHub`,
  },

  socialMedia: {
    title: "Anonymous Social Platform",
    desc: "A unique social media platform enabling anonymous posting and real-time chatting. Built with React and Firebase, providing secure authentication, real-time database synchronization, and cloud storage for media content.",
    img: "/social-media.png",
    github: process.env.NEXT_PUBLIC_SOCIAL_MEDIA_REPO || "https://github.com/msinha569/social-media-app",
    live: process.env.NEXT_PUBLIC_SOCIAL_MEDIA_URL || "https://your-social-media-link.com",
    techStack: [
      "React",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "Tailwind CSS",
      "React Router",
    ],
    details: [
      "Implemented Firebase Authentication for secure anonymous and registered user access",
      "Built real-time chat system using Firestore's live update capabilities",
      "Created anonymous posting feature with temporary identity management",
      "Developed image and media upload functionality with Firebase Storage",
      "Implemented real-time notifications for messages and interactions",
      "Built content moderation system to filter inappropriate content",
      "Designed responsive UI supporting mobile and desktop experiences",
      "Optimized Firestore queries to minimize reads and reduce costs",
    ],
    code: `import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  onSnapshot, 
  addDoc,
  orderBy 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, 'rooms', roomId, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [roomId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    
    await addDoc(
      collection(db, 'rooms', roomId, 'messages'),
      {
        text: newMessage,
        timestamp: new Date(),
        anonymous: true,
      }
    );
    
    setNewMessage('');
  };

  // View complete implementation on GitHub
}`,
  },
};