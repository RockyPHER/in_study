import AudioPlayer from "./components/audioPlayer";
import Background from "./components/background";
import PauseButton from "./components/buttons/pause";
import StartButton from "./components/buttons/start";
import StopButton from "./components/buttons/stop";
import ClockTimer from "./components/clock";
import ButtonContainer from "./components/containers/buttonContainer";
import ClockContainer from "./components/containers/clockContainer";
import MainContainer from "./components/containers/mainContainer";

function App() {
  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="w-full h-full flex justify-center items-center">
        <MainContainer>
          <ClockContainer>
            <ClockTimer />
          </ClockContainer>
          <AudioPlayer />
          <ButtonContainer>
            <StopButton />
            <StartButton />
            <PauseButton />
          </ButtonContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
