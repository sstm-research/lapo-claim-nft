import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="mx-auto w-full h-screen flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
      <Link href="https://laposports.com/categoria-produto/major-nature-league/">
        <Image
          src="/logo.png"
          alt="Lapô logo"
          width={200}
          height={200}
          className="pointer-events-none"
        />
      </Link>
    </main>
  );
}
