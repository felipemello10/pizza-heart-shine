import { MessageCircle } from "lucide-react";

const PHONE = "5511910271967";
const MESSAGE = "Olá! Vim pelo site da Mercutio e gostaria de fazer um pedido 🍕";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3.5 text-white shadow-xl shadow-black/20 hover:scale-105 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping -z-10" />
      <MessageCircle className="size-5 fill-white" />
      <span className="hidden sm:inline text-sm font-medium">Pedir no WhatsApp</span>
    </a>
  );
}
