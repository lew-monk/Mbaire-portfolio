import { IMAGES } from "@/assets/images/images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
}

export default function CaseStudy({ title, description, image }: CaseStudyProps) {
  return (
    <section className="grid gap-2">
      <Image src={IMAGES[image]} alt="CaseStudy" width={0} height={0} style={{ width: "100%", height: "auto" }} />
      <section className="flex flex-col gap-2">
        <h2 className="text text-secondary">{title}</h2>
        <p className="text-gray-400 font-light text-sm leading-6">{description}</p>
      </section>
      <footer className="flex items-center justify-end gap-2 mt-2">
        <h3 className="text-secondary text-base ">View Case Study</h3>
        <ArrowRight height={16} />
      </footer>
    </section>
  );
}
