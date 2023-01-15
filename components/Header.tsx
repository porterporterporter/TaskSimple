import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-24 flex-wrap content-center justify-between border-b-2 border-b-slate-200 bg-slate-100">
      <Link href="/" className="flex">
        <p className="ml-6 text-2xl">TaskSimple</p>
        <ClipboardDocumentCheckIcon className="mt-1.5 h-6 w-6" />
      </Link>
      <Link href="#" className="mr-6" type="button">
        My Account
      </Link>
    </div>
  );
}
