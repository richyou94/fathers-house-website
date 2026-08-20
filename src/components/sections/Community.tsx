import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { communityCopy, communityImages } from "@/data/siteContent";

export default function Community() {
  return (
    <section
      id="community"
      className="bg-[var(--color-ivory)] py-[var(--section-space)]"
    >
      <Container className="flex flex-col gap-12">
        <SectionLabel>{communityCopy.sectionLabel}</SectionLabel>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {communityImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[3/4] overflow-hidden ${
                index === 0 ? "col-span-2 row-span-2 aspect-square sm:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
