import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export function imageExistsInPublic(filename: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "images", filename));
}

interface PhaseMapMediaProps {
  filename: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  tag?: string;
}

export default function PhaseMapMedia({
  filename,
  alt,
  caption,
  width = 1600,
  height = 1000,
  tag,
}: PhaseMapMediaProps) {
  const exists = imageExistsInPublic(filename);

  if (exists) {
    return (
      <figure className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl overflow-hidden">
        <Image
          src={`/images/${filename}`}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 896px) 100vw, 840px"
          className="w-full h-auto block"
        />
        <figcaption className="border-t-2 border-black bg-slate-50 px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
          <span className="font-medium text-slate-900">{caption}</span>
          {tag ? (
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black bg-[#36C5F0]/20 text-slate-900">
              {tag}
            </span>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="border-2 border-dashed border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-black bg-[#36C5F0]/25 text-slate-900">
          <ImageIcon size={14} aria-hidden="true" />
          {tag || "Canvas Asset"}
        </span>
        <code className="text-xs font-mono font-semibold text-slate-900 bg-slate-100 border border-black/30 rounded-md px-2.5 py-1">
          /images/{filename}
        </code>
      </div>
      <div className="py-4 border-y border-dashed border-slate-300 flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Image Placeholder
        </span>
        <figcaption className="text-base font-semibold text-slate-900 leading-snug">
          {caption}
        </figcaption>
      </div>
      <p className="text-xs text-slate-500">
        Drop <span className="font-mono text-slate-700">{filename}</span> into{" "}
        <span className="font-mono text-slate-700">public/images/</span> to render automatically.
      </p>
    </figure>
  );
}
