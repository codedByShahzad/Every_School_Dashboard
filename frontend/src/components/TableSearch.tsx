import Image from "next/image";
import React from "react";
import { role } from "../lib/data";

const TableSearch = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
      <div className="w-full md:w-auto  flex items-center gap-2 px-2 text-xs ring-[1.5px] ring-gray-300 rounded-full">
        <Image src="/images/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-50 bg-transparent outline-none p-2 "
        />
      </div>
      <div className="flex items-center gap-4 self-end">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
          <Image src="/images/filter.png" alt="" width={14} height={14} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
          <Image src="/images/sort.png" alt="" width={14} height={14} />
        </button>
        {role === "admin" && <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
          <Image src="/images/plus.png" alt="" width={14} height={14} />
        </button>}
        
      </div>
    </div>
  );
};

export default TableSearch;
