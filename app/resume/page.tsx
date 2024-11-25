"use client";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ClipLoader";

export default function Resume() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-start md:px-20 w-full min-h-screen pt-10">
      {Loading && (
        <div>
          <ScaleLoader size={100} color="#36d7b7" />
        </div>
      )}
      <iframe
        className="w-full h-[85vh]"
        src="https://drive.google.com/file/d/1CgV5X971VUamC8-4KkqngJmn3AU45zAt/preview"
        allow="autoplay"
        onLoad={() => setLoading(!Loading)}
      />
    </div>
  );
}
