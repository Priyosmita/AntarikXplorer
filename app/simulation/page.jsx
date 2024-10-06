import Image from "next/image";
import Header from "../components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Footer from "../components/global/footer";
import Link from "next/link";

const Page = () => {
  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  return (
    <div className="bg-black bg-[url('/landing-page-assets/about_bg.png')] bg-center bg-cover bg-no-repeat bg-opacity-20">
      <div className="bg-black z-[2] top-0 left-0 fixed h-full w-dvw bg-opacity-50"></div>
      <Header
        logo={
          <Image
            src="/global-assets/logo.png"
            alt="Logo"
            className="h-10 object-contain"
            width={200}
            height={100}
          />
        }
        options={options}
        name="AntarikXplorer"
        catchPhrase="Beyond the stars"
        accountIcon={
          <MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />
        }
      />

      <Link href="/simulation/go" className="relative block pt-24 z-10">
        <h2
          className="text-8xl viga-regular text-center py-4"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Venture Beyond the Stars
        </h2>

        <div className="flex justify-between items-center mx-8 viga-regular">
          <Image
            src="/landing-page-assets/about_planet.png"
            alt="planet"
            width={1920}
            height={1080}
            className="object-contain h-96"
          />
          <div className="space-y-3">
            <h3 className="text-3xl">Simulate Planetary Environments</h3>
            <p className="w-4/5">
              Discover how different planets work by simulating their
              atmospheres, gravity, and weather. Experience extreme conditions
              from gas giants to rocky worlds in real-time.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between items-center mx-8 viga-regular">
          <Image
            src="/landing-page-assets/about_spacecraft.png"
            alt="spacecraft"
            width={1920}
            height={1080}
            className="object-contain h-96"
          />
          <div className="space-y-3">
            <h3 className="text-3xl">Command Your Spaceship</h3>
            <p className="w-4/5">
              Pilot your own spacecraft across star systems, navigating the vast
              distances between planets. Complete missions, collect data, and
              explore the wonders of space at your own pace.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mx-8 viga-regular">
          <div className="flex justify-center items-end -space-x-52 w-1/2">
            <Image
              src="/landing-page-assets/about_vr.png"
              alt="vr"
              width={1920}
              height={1080}
              className="object-contain h-96"
            />
            <Image
              src="/landing-page-assets/about_mockup.png"
              alt="mockup"
              width={1920}
              height={1080}
              className="object-contain h-64"
            />
          </div>
          <div className="space-y-3 w-1/2">
            <h3 className="text-3xl">Simulate Planetary Environments</h3>
            <p className="w-4/5">
              Discover how different planets work by simulating their
              atmospheres, gravity, and weather. Experience extreme conditions
              from gas giants to rocky worlds in real-time.
            </p>
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default Page;
