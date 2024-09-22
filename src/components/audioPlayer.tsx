import ReactPlayer from "react-player";

const AudioPlayer = () => {
  const url = "https://www.youtube.com/watch?v=xNN7iTA57jM";

  return (
    <div>
      <ReactPlayer
        playing
        loop
        width={0} // Set width to 0 to hide the player
        height={0} // Set height to 0 to hide the player
        config={{
          youtube: {
            playerVars: {
              autoplay: 1, // Autoplay audio
              controls: 1, // Show controls
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
            },
          },
        }}
        url={url}
      />
    </div>
  );
};

export default AudioPlayer;
