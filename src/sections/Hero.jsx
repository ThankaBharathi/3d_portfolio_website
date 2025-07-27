import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const text = `Crafting next-gen AI-powered applications that merge seamless user experience with data-driven intelligence. Let’s transform groundbreaking ideas into real-world innovations.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen relative">
      {/* Optional: Add a soft background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#fdfdfd] opacity-90 -z-40" />

      <AnimatedHeaderSection
        subTitle={"AI/ML Engineer"}
        title={"Thanka Bharathi"}
        text={text}
        textColor={"text-gray-800"} // changed to a softer gray
      />

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -9.5], fov: 18, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.45} />
          <Float speed={0.8} rotationIntensity={1.2} floatIntensity={1.4}>
            <Planet scale={isMobile ? 0.75 : 1.05} />
          </Float>

          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4.2, 1]}>
              <Lightformer
                form={"circle"}
                intensity={1.8}
                position={[0, 4.5, -8]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[0, 2.8, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-4.5, -1.2, -1]}
                scale={11}
              />
              <Lightformer
                form={"circle"}
                intensity={1.7}
                position={[9.5, 1.5, 0]}
                scale={15}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
