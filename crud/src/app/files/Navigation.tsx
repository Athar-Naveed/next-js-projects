import Link from "next/link";
export const Navigation = () => {
  return (
    <>
      <div className="container flex gap-4 font-semibold font-sans text-xl">
        <Link href="/">Home</Link>
        <Link href="/wall">Our Wall</Link>
        <Link href="/tasks">Tasks</Link>
      </div>
    </>
  );
};
