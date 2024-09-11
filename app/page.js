import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        className="underline text-cyan-600 hover:text-cyan-300"
        href="./week-2/"
      >
        Week 2
      </Link>
    </main>
  );
}
