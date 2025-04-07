import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
// import About from "@/components/About";
// import Stats from "@/components/Stats";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center text-foreground">
      <NavBar />
      <Hero />
      <Stack />
      {/* <About />
      <Stats /> */}
    </div>
  );
};

export default App;
