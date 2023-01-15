import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-24 flex-wrap content-center justify-end border-t-2 border-t-slate-200 bg-slate-100">
      <div className="mr-6">
        <Link href="/" className="flex justify-end">
          <p className="text-xl">TaskSimple</p>
          <ClipboardDocumentCheckIcon className="mt-1.5 h-6" />
        </Link>
        <small>&copy; Copyright {new Date().getFullYear()}, Aaron Porter</small>
      </div>
    </div>
  );
}
