import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Doctors from "@/components/Doctors";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col pt-6  bg-white dark:bg-black sm:items-start">
        <Hero />
        <Doctors />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}
