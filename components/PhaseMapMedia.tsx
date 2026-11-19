import Image from "next/image";

interface PhaseMapMediaProps {
  filename: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sizes?: string;
  tag?: string;
}

export default function PhaseMapMedia({
  filename,
  alt,
  caption,
  width,
  height,
  sizes = "(max-width: 896px) 100vw, 840px",
  tag,
}: PhaseMapMediaProps) {
  return (
    <figure className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center bg-slate-50">
        <Image
          src={`/images/phase-map/${filename}`}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="w-full h-auto block object-contain"
        />
      </div>
      <figcaption className="mt-auto border-t-2 border-black bg-slate-50 px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
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
