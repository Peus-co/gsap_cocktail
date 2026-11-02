import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return  (
    <div className="flex-center h-[100vh]">
      <h2 className="text-indigo-400 text-4xl">Hello , GSAP! </h2>
    </div>
  )
}