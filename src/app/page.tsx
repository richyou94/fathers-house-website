import HomePage from "@/components/pages/HomePage";
import { siteContentKo } from "@/data/siteContent.ko";

export default function Home() {
  return <HomePage content={siteContentKo} />;
}
