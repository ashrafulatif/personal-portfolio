import Particles from "./ui/particles";

const BackgroundParticles = () => {
  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={400}
      ease={80}
      color="#63ffda"
      refresh
    />
  );
};

export default BackgroundParticles;
