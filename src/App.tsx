import "./App.css";
import Header from "./Header";
const App = () => {
  return (
    <div className="bg-red-400">
      <h1>Hekko this is the first page</h1>
      <Header />
      <div className="banner">
        <img
          src="https://media.istockphoto.com/id/1368265555/photo/vortex-split-view-of-blue-ocean-waters-surface.jpg?s=612x612&w=0&k=20&c=S7U0qen2-Jmm8hNqaKYXNSV5H-xDNNk9uYlSM6xLGfU="
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
