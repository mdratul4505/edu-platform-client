
import Hero from "@/Components/Hero/Hero";
import Ourstudent from "@/Components/OurStudents/Ourstudents";
import PopularCourses from "@/Components/PopularCourse/PopularCourse";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";





export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="">
          <Hero></Hero>
          <WhyChoose></WhyChoose>
          <PopularCourses></PopularCourses>
          <Ourstudent></Ourstudent>
          
          <div>
            
          </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
