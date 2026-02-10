export const phoneNumber = {
  unformatted: "31627195985",
  readable: "06 271 959 85",
} as const;

const defaultMessage = "Hallo! Ik heb een vraag over jullie diensten.";

export const openWhatsapp = () => {
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappURL = `https://wa.me/${phoneNumber.unformatted}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};
