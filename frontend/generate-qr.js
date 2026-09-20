
import QRCode from "qrcode";

const websiteUrl = "https://goldencatering.vercel.app/";

QRCode.toFile(
  "golden-catering-qr.png",
  websiteUrl,
  {
    width: 1000,
    margin: 4,
    errorCorrectionLevel: "H",
  },
  (error) => {
    if (error) throw error;

    console.log("QR code generated successfully!");
  }
);