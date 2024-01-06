import React, { useState, useEffect } from "react";
import Textbox from "../Inputs/Textbox";
import Sidebar from "../Sidebar/SidebarMain";
import { useRouter } from "next/navigation";
import DraftViewAfterCreateLayout from "./DraftViewAfterCreateLayout";
import { useDispatch, useSelector } from "react-redux";
import { createDraft, recreateDraft } from "@/states/draft/action";
import { toast } from "react-toastify";
import useInput from "@/hooks/useInput";
import Head from "next/head";

export default function DraftCreateLayout() {
  const router = useRouter();
  const draft_detail = useSelector((state) => state.draft_detail);
  const is_regenerate = useSelector((state) => state.is_regenerate);
  const dispatch = useDispatch();

  const [regenerateId, setRegenerateId] = useState(null);
  const [prompt, handlePromptChange, setPrompt] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDoneGenerate, setIsDoneGenerate] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const PROMPT_PREPEND = "Buatkan berita dengan deskripsi: ";

  useEffect(() => {
    if (!is_regenerate) {
      return;
    }
    setPrompt(draft_detail.title);
    setRegenerateId(draft_detail.id);
    setIsDoneGenerate(true);
  }, [is_regenerate, draft_detail, setPrompt]);

  const handleGenerateBerita = async () => {
    if (prompt === "") {
      toast.error("Masukkan deskripsi berita!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsLoading(true);
      dispatch(
        createDraft({
          prompt: `${PROMPT_PREPEND} ${prompt}`,
          onSuccess: (value) => {
            setIsLoading(false);
            setIsDoneGenerate(true);
            setIsCreated(true);
            router.push(`/draf/${value.draft_id}`);
          },
          onError: () => {
            setIsLoading(false);
          },
        })
      );
    }
  };

  const handleMuatUlang = async () => {
    if (prompt === "") {
      toast.error("Masukkan deskripsi berita!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsLoading(true);
      dispatch(
        recreateDraft({
          id: regenerateId,
          prompt: `${PROMPT_PREPEND} ${prompt}`,
          onSuccess: (value) => {
            setIsLoading(false);
            setIsDoneGenerate(true);
            router.push(`/draf/${value.draft_id}`);
            setIsCreated(true);
          },
          onError: () => {
            setIsLoading(false);
          },
        })
      );
    }
  };

  return (
    <main className="flex flex-row min-h-screen w-full bg-blue-50">
      <Sidebar />
      <div className="flex flex-col w-4/5 p-16">
        <h1 className="font-heading place-self-start text-5xl font-bold pb-8 text-black">
          Buat Draf Berita
        </h1>

        <div className="flex flex-col py-10 px-12 items-start self-stretch border-2 border-blue-400 rounded-md gap-5 bg-white">
          <div className="flex flex-col gap-5">
            <p className="font-body font-bold text-xl text-black">
              Buat draf berita secara otomatis dengan bantuan AI!<br></br>
              Cukup masukkan deskripsi berita yang ingin dibuat pada kolom
              berikut.
            </p>
            <p className="font-body text-md text-black">
              Contoh deskripsi draf berita:<br></br>
              Gedung perkantoran tinggi di Jakarta Pusat dilanda kebakaran pada
              tanggal 15 Oktober pukul 20.30, dengan penyebab diduga akibat
              korsleting listrik. Respon dari pemadam kebakaran sangat cepat
              dalam mencegah korban jiwa.
            </p>
          </div>

          <div className="flex flex-col items-center self-stretch gap-3">
            <Textbox
              id="prompt"
              rows={4}
              placeholder="Masukkan deskripsi berita yang ingin dibuat"
              value={prompt}
              onInputChange={handlePromptChange}
            />

            {isLoading && (
              <button
                disabled
                type="button"
                className="
                                font-body py-2 px-5
                                font-medium bg-gray-100 rounded-lg border border-gray-200 
                                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                                inline-flex items-center text-black"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-6 h-6 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Sistem sedang Generate Berita...
              </button>
            )}

            {!isLoading && isDoneGenerate && (
              <>
                <Head>
                  <title>Buat Ulang Draf Berita</title>
                </Head>
                <button
                  className="font-body py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                  onClick={handleMuatUlang}
                >
                  Buat Ulang Draf Berita
                </button>
              </>
            )}
            {!isLoading && !isDoneGenerate && (
              <>
                <Head>
                  <title>Buat Draf Berita</title>
                </Head>
                <button
                  className="font-body py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                  onClick={handleGenerateBerita}
                >
                  Buat Draf Berita
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
