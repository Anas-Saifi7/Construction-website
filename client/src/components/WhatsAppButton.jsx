export default function WhatsAppButton() {
  const phone = "919873107857"; // 91 + number

  const message = encodeURIComponent(
    "Hello 👋, I want to enquire about construction manpower and placement services in Delhi NCR."
  );

  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mangilal Construction on WhatsApp"
      title="Chat with Mangilal Construction on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-16 h-16
                 flex items-center justify-center shadow-lg shadow-green-300
                 hover:scale-110 hover:shadow-xl transition-all duration-300
                 animate-pulse z-50"
    >
      <i
        className="fab fa-whatsapp text-3xl"
        aria-hidden="true"
      ></i>
    </a>
  );
}
