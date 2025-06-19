"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";

// Daftar projek
const projects = [
  {
    id: 1,
    title: "Try-On App",
    image: "/Screenshot 2025-06-19 at 12.13.21 PM.png",
    description: "Virtual fitting room for fashion",
    detail:
      "Try-On is an AR-based fashion app that allows users to try on clothes virtually with marketplace integration and shareable outfits. You can try our app, just click this : https://tryon-nine.vercel.app",
  },
  {
    id: 2,
    title: "Emotion Detector",
    image: "/Screenshot 2025-06-19 at 12.16.09 PM.png",
    description: "AI-based face emotion analysis",
    detail:
      "Detects facial expressions using CNN and AffectNet dataset. Real-time mental health insight and emotion charting.",
  },
  {
    id: 3,
    title: "UMKM Website 'Bebek mercon mama aisya'",
    image: "/Screenshot 2025-06-18 at 2.55.44 PM.png",
    description: "Laravel PHP website for UMKM website",
    detail:
      "A website that was created specifically as a form of assistance for the problems experienced by the restaurant. Namely, uncertain opening hours and information on stock available at the restaurant.",
  },
];

export default function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example">
        {/* 
    <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
    <motion.circle
        cx="50"
        cy="50"
        r="30"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
    />
    </svg>
    */}


      <motion.ul ref={ref} style={{ WebkitMaskImage: maskImage, maskImage }}>
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="overlay">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span className="detail">{project.detail}</span>
            </div>
          </li>
        ))}
      </motion.ul>

      <StyleSheet />
    </div>
  );
}

// Fungsi scroll mask
function useScrollOverflowMask(scrollXProgress) {
  const left = `0%`;
  const right = `100%`;
  const leftInset = `20%`;
  const rightInset = `80%`;
  const transparent = `#0000`;
  const opaque = `#000`;

  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

// CSS Inline
function StyleSheet() {
    return (
      <style>{`
        #example {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          padding: 0;
          box-sizing: border-box;
        }
  
        #example #progress {
          position: absolute;
          top: -65px;
          left: -15px;
          transform: rotate(-90deg);
          z-index: 10;
        }
  
        #example .bg {
          stroke: #0b1011;
        }
  
        #example #progress circle {
          stroke-dashoffset: 0;
          stroke-width: 10%;
          fill: none;
        }
  
        #progress .indicator {
          stroke: var(--accent, #00f);
        }
  
        #example ul {
          display: flex;
          list-style: none;
          height: 60vh;
          overflow-x: auto;
          padding: 20px;
          margin: 0;
          gap: 40px;
          scroll-snap-type: x mandatory;
          box-sizing: border-box;
        }
  
        #example li {
            flex: 0 0 80vw; /* Batas lebar agar tidak overflow */
            max-width: 80vw; /* Tambahkan ini */
            height: 100%;
            scroll-snap-align: center;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            overflow: hidden; /* Cegah isi overflow */
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
  
        .project-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 24px;
            transition: transform 0.4s ease;
            max-width: 100%;   /* Tambahkan ini */
            max-height: 100%;  /* Tambahkan ini */
        }
  
        .project-item:hover .project-img {
          transform: scale(1.05);
        }
  
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: white;
        }
  
        .project-item:hover .overlay {
          opacity: 1;
        }
  
        .overlay h4 {
          margin: 0;
          font-size: 32px;
          font-weight: 700;
        }
  
        .overlay p {
          margin: 12px 0 6px;
          font-size: 20px;
        }
  
        .overlay .detail {
          margin-top: 12px;
          font-size: 16px;
          opacity: 0.9;
        }
  
        #example ::-webkit-scrollbar {
          height: 8px;
          background: transparent;
        }
  
        #example ::-webkit-scrollbar-thumb {
          background: var(--accent, #00d6b4);
          border-radius: 8px;
        }
      `}</style>
    );
  }  