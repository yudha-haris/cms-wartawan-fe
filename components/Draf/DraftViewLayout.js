import { useRouter } from "next/navigation";

export default function DraftViewLayout({ draft_detail, onToggleSidebar }) {
  const router = useRouter();

  if (!draft_detail) {
    return <div></div>;
  }

  const content_parsed = draft_detail.content.split("\n");

  return (
    <div className="flex flex-col z-0 items-start py-10 lg:px-20 px-4 gap-8 min-h-screen w-full bg-blue-50">
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
          <button
            onClick={onToggleSidebar}
            className="md:hidden flex font-body py-1 px-4 border-2 text-blue-600 border-blue-600 rounded-lg 
                                    hover:bg-blue-400 hover:text-white"
          >
            Menu
          </button>
        </div>
      </div>
      <h1 className="font-heading text-2xl font-bold text-black border-b-1 border-black">
        {draft_detail.title}
      </h1>
      <div
        className="flex flex-1 flex-col py-6 md:px-10 px-4 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-1 overflow-y-auto"
      >
        {content_parsed.map((paragraph) => (
          <p
            key={paragraph}
            className="text-black font-body text-md text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
