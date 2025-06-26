import Marquee from "react-fast-marquee";

export function MarqueeAvatarRow() {
  const clientLogos = [
    "Badan-Informasi-Geospasial.png", "kcic.png", "BNPP.png",
    "DPKP3.png", "DSN.png", "Kabupaten-Subang.png",
    "Kementerian-Perhubungan-RI.png", "NSI.png", "PTPN-4.png",
    "PTPN-7.png", "Sinarmas.png", "KAI.png", "HP.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-4 mt-2">
      <Marquee pauseOnHover speed={40} gradient gradientWidth={80}>
        {clientLogos.map((file, i) => (
          <img
            key={i}
            src={`/${file}`}
            alt={file}
            className="h-16 w-auto mx-8 object-contain transition duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
}
