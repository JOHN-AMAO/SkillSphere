import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl='/' />
      </header>
      <Link href='/index.html'>
        <div>Your page&apos;s content can go here.</div>
      </Link>
    </>
  );
}
