import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 text-white/90 hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX className="text-2xl" />
        </button>
        <img
          src={src}
          alt={alt ?? ""}
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
