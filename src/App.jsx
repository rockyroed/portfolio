import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-background text-text mx-[16px]">
      <div className="w-full">
        <NavBar />
        <Hero />
      </div>
      <About />
    </div>
  );
};

export default App;
