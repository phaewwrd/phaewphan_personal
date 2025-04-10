"use client";
import { useRouter } from "next/navigation";

export default function buttonaboutme() {
  const router = useRouter();

  const goToAboutme = () => {
    router.push("/aboutmeinfo");
  };
  return (
    <div>
      <button
        className="bg-slate-900 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={goToAboutme}
      >
        About me
      </button>
    </div>
  );
}
