'use client';
import Image from "next/image";
import { WorksContent } from "@/libs/interface/cmsObject";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function WorksTile({ workContents, targetWidth = 468 }: { workContents: WorksContent[], targetWidth?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [tileColumns, setTileColumns] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width;
      setContainerWidth(width);

      const accurateColumns = Math.ceil(width / targetWidth);
      setTileColumns(accurateColumns);
    }
  }, [workContents, containerWidth, targetWidth])

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const updatedWidth = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(updatedWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columns: WorksContent[][] = [];
  for (let i = 0; i < tileColumns; i++) {
    columns.push([]);
  }
  workContents.forEach((work, idx) => {
    if (tileColumns > 0) {
      const targetCol = idx % tileColumns;
      columns[targetCol].push(work);
    }
  });

  return (
    <div ref={containerRef} className="w-full">
      {tileColumns > 0 && (
        <div className="flex w-full gap-4">
          {columns.map((colWorks, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-4 w-0 flex-1"
            >
              {colWorks.map((work) => (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="block w-full"
                >
                  <Image
                    src={work.meta.thumbnail.url}
                    width={work.meta.thumbnail.width}
                    height={work.meta.thumbnail.height}
                    alt={work.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}