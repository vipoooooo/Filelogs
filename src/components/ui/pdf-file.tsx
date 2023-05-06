import Image from "next/image";

const PDFFile = ({
  title,
  size,
  url,
}: {
  title: string;
  size: number;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="] flex items-center gap-[5px] rounded-full border border-seperator-dark-withTran bg-bg-darkBase-pri px-[10px] py-[3px] hover:bg-bg-darkBase-ter"
    >
      <Image priority src="/pdf.png" alt="file" width={13} height={13} />
      <div className="flex flex-nowrap  items-center gap-[5px]">
        <p className="line-clamp-2 text-[13px] text-label-dark-pri">
          {title}.pdf
        </p>
        <p className="whitespace-nowrap text-[11px] text-label-dark-ter">
          {size} kB
        </p>
      </div>
    </a>
  );
};

export { PDFFile };
