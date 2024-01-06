import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function DraftViewLayout({ draft_detail }) {
  const router = useRouter();
  const [contentParsed, setContentParsed] = useState("");

  useEffect(() => {
    if (!draft_detail) {
      return;
    }
    setContentParsed(draft_detail.content);
  }, [draft_detail]);

  if (!draft_detail) {
    return <div />;
  }

  return (
    <div className="flex flex-col items-start self-stretch py-10 px-20 gap-8 min-h-screen w-3/4 bg-blue-50">
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex flex-1 flex-row items-start gap-2 self-stretch">
          <button
            onClick={() => router.push(`/draf`)}
            className="flex font-body py-1 px-4 border-2 text-blue-600 border-blue-600 rounded-lg 
                                    hover:bg-blue-400 hover:text-white"
          >
            Kembali
          </button>
          <p className="flex flex-1 font-body text-black py-1 justify-center self-center bg-blue-200">
            Melihat Draf Berita
          </p>
        </div>
      </div>
      <h1 className="font-heading text-2xl font-bold text-black border-b-1 border-black">
        {draft_detail.title}
      </h1>
      <div
        className="flex flex-1 flex-col py-6 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-1 overflow-y-auto"
      >
        <ReactMarkdown className="hover:cursor-default bg-white prose">
          {contentParsed}
        </ReactMarkdown>
      </div>
    </div>
  );
}
