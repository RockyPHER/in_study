import videosource from "../assets/videos/background1.mp4";

const Background = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden -z-10">
      <video
        className="relative top-0 left-0 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videosource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
