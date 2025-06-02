'use client';
import { WorksContent } from "@/libs/interface/cmsObject";
import { useEffect, useRef, useState } from "react";
import WorkCard from "./workCard";

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
    <div className="w-full p-4">
      <div ref={containerRef} className="flex w-full gap-4">
        {tileColumns > 0 && columns.map((colWorks, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col gap-4 w-0 flex-1"
          >
            {colWorks.map((work, workIdx) => (
              <WorkCard workContent={work} key={workIdx} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}