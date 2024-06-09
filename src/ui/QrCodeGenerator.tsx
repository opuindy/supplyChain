import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import * as htmlToImage from "html-to-image";
import Button from "./Button";

interface QrCodeGeneratorProps {
  value: string;
}

const QrCodeGenerator = ({ value }: QrCodeGeneratorProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    if (qrCodeRef.current && !isDownloading) {
      setIsDownloading(true);
      htmlToImage
        .toPng(qrCodeRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "qr-code.png";
          link.click();
          setIsDownloading(false);
        })
        .catch((error) => {
          console.error("Error generating QR code:", error);
          setIsDownloading(false);
        });
    }
  };

  return (
    <div className="h-20vh flex flex-col items-start justify-between space-y-4">
      <div ref={qrCodeRef}>
        <QRCode value={value} size={300} includeMargin />
      </div>

      <Button onClick={downloadQRCode} disabled={isDownloading}>
        {isDownloading ? "Downloading..." : "Download Qr code"}
      </Button>
    </div>
  );
};

export default QrCodeGenerator;
