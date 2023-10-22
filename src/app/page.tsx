import SliderImage from "@/assets/images/SliderImage.png";
import CaseStudy from "@/components/case-study";
//@ts-ignore
import caseStudies from "@/assets/data/case-studies.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary relative">
      <section className="w-full px-4 flex flex-col gap-8 justify-center ">
        <main className="grid gap-2 w-full ">
          <h1>
            <span className="tracking-wider">Howdy 👋🏽, I&apos;m </span>{" "}
            <span className="text-3xl text-secondary">Mary Mbaire,</span>
          </h1>
          <h1 className="text-3xl text-secondary">User Experience Designer</h1>
          <h2 className="text-xl">based in Nairobi, Kenya</h2>
        </main>
        <section className="text-gray-600 font-light text-base grid gap-4">
          <p>
            Currently, I&apos;m a part of the design team crafting solutions and creating a lifestyle experience on the
            M-pesa App at Safaricom PLC.
          </p>
          <p>I have a keen interest in designing for accessibility and social impact.</p>
        </section>
        <aside className="w-full flex flex-col items-center justify-center gap-4">
          <div className="w-3/4">
            <Image
              src={SliderImage}
              alt="Mbaire Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <section className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-6 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </section>
          <section className="grid justify-items-start gap-1">
            <h1 className="text-center w-full text-secondary text-xl">Mpesa Homepage Revamp</h1>
            <p className="text-gray-600 text-sm">Do more on M-PESA fast and conveniently</p>
          </section>
        </aside>
      </section>

      <section className="w-screen h-24 my-16 bg-secondary text-white flex text-xs justify-evenly gap-2 font-thin divide-x-2 items-center">
        <h1 className="">UX Design</h1>
        <h1 className="pl-2">Visual Design</h1>
        <h1 className="pl-2">Accessible Design</h1>
        <h1 className="pl-2">Inclusive Design</h1>
      </section>

      <section className="px-4 grid gap-4">
        <h1>Latest Projects</h1>
        <div className="grid gap-12">
          {caseStudies.map((caseStudy: any) => (
            <CaseStudy key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </section>
    </main>
  );
}
