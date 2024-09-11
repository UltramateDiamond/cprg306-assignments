import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <div>Yichen Hao</div>
      <Link
        className="underline text-cyan-600 hover:text-cyan-300"
        href="https://github.com/UltramateDiamond/cprg306-assignments"
      >
        My Github Repository
      </Link>
    </main>
  );
}
