'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Pause, Play, Instagram, Twitter } from 'lucide-react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleGoals, setVisibleGoals] = useState<string[]>([])

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = false;
          await videoRef.current.play();
          setIsVideoPlaying(true);
          setIsAudioPlaying(true);
        } catch (error) {
          console.error("Autoplay was prevented:", error);
          setIsVideoPlaying(false);
          setIsAudioPlaying(false);
        }
      }
    };

    playVideo();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleGoals((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.goal-item').forEach((goal) => {
      observer.observe(goal)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleAudioToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsAudioPlaying(!videoRef.current.muted)
    }
  }

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const goals = [
    { id: 'education', title: 'Education & Skill Development', items: ['Girls\' education programs', 'STEM education for women', 'Literacy campaigns', 'Vocational training for women'] },
    { id: 'economic', title: 'Economic Empowerment', items: ['Women entrepreneurship', 'Microfinance for women', 'Equal pay initiatives', 'Workplace mentorship programs'] },
    { id: 'health', title: 'Health & Well-being', items: ['Maternal health services', 'Mental health support for women', 'Reproductive rights and health', 'Nutrition programs for women'] },
    { id: 'social', title: 'Social Empowerment', items: ['Gender equality initiatives', 'Women\'s rights advocacy', 'Breaking glass ceiling initiatives', 'Safe public spaces for women'] },
    { id: 'legal', title: 'Legal & Policy Advocacy', items: ['Fighting gender-based violence', 'Legal aid for women', 'Advocacy for equal inheritance rights', 'Sexual harassment prevention'] },
    { id: 'tech', title: 'Technology & Innovation', items: ['Women in tech programs', 'Coding workshops for girls', 'Digital entrepreneurship platforms', 'Apps for women\'s safety'] },
  ]

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gray-950 text-gray-100">
      <div className="starry-background"></div>
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          loop
          playsInline
          autoPlay
          muted={false}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/(1%20HOUR)%20Locked%20In%20Alien%20%5BTikTok%20Meme%5D%20%20%EF%BC%82What%20is%20the%20Next%20Step%20of%20the%20Operation''%20%5BtWRkmIa7UkI%5D-00.00.00.000-00.00.21.132-4GDFRG1ntkwn3vNcyeqpfbK7PPoTkl.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-violet-300 bg-black bg-opacity-50 px-4 py-1 rounded">
            Women developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-gradient">
            Nishchay Mishra
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-violet-200 bg-black bg-opacity-40 px-4 py-1 rounded">
            Locked tf in
          </h2>
        </div>
        <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
          <button
            onClick={handleVideoToggle}
            className="bg-violet-700 hover:bg-violet-600 text-white p-2 rounded-full transition duration-300"
            aria-label={isVideoPlaying ? "Pause video" : "Play video"}
          >
            {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={handleAudioToggle}
            className="bg-violet-700 hover:bg-violet-600 text-white p-2 rounded-full transition duration-300"
            aria-label={isAudioPlaying ? "Mute audio" : "Unmute audio"}
          >
            {isAudioPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-950 z-20"></div>
      </div>
      <div className="relative z-30">
        <div 
          className="fixed pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)',
            filter: 'blur(20px)',
          }}
        ></div>
        <div className="container mx-auto px-4 py-16">
          <section className="mb-16 bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
            <h2 className="text-3xl font-bold mb-4 text-violet-300">About</h2>
            <p className="text-gray-300 mb-4">
              Women development specialist. Permanently engrossed in tasks that move the society towards a future where female humans are the dominant race on Earth. May or may not consider every other animal species cattle for the great women development machine.
            </p>
            <p className="text-gray-300">
              Interests: Photography, Gamedev, Cloud, Devops, App dev and, of course, absolute reverse patriarchy
            </p>
          </section>
          <section className="mb-16 bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
            <h2 className="text-3xl font-bold mb-4 text-violet-300">Currently working on</h2>
            <p className="text-gray-300">
              WomenC, WSA, and Docker for Women. Also working alongside Neuralink to create an LLM that constantly compares the brain waves of women to the motion of their vocal cords to create a fool-proof system of decyphering what women actually mean and want so that their needs can be understood fully and hence, fulfilled to create a utopia where women are empowered and complete in all portions of society.
            </p>
          </section>
          <section className="mb-16 bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
            <h2 className="text-3xl font-bold mb-4 text-violet-300">Goals for 2025</h2>
            <p className="text-gray-300 mb-4">Work on women empowerment and related fields, including but not limited to:</p>
            <ul className="space-y-8">
              {goals.map((goal) => (
                <li
                  key={goal.id}
                  id={goal.id}
                  className="goal-item"
                >
                  <h3 className="text-xl font-semibold mb-2 text-violet-200">{goal.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {goal.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-16 bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
            <h2 className="text-3xl font-bold mb-4 text-violet-300">New year's resolution</h2>
            <p className="text-gray-300">
              Be serious about career and academics but not stop having fun and explore many different fields of work including, of course, women empowerment.
            </p>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 bg-opacity-60 py-4">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/mishra_nishchay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-violet-400 transition-colors duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://x.com/NishchayMi43064"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-violet-400 transition-colors duration-300"
          >
            <Twitter size={32} />
          </a>
        </div>
      </footer>
    </main>
  )
}

