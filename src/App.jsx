import NavBar from "@/components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col justify-center bg-background text-text mx-[16px]">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
