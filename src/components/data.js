import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Yuk Setor Pakaian Bekasmu di TSM Revive",
  desc: "Dengan sistem TSM Revive yang canggih, pakaian bekas Anda bisa mendapatkan kehidupan baru dan membantu mengurangi dampak negatif industri fashion terhadap lingkungan",
  image: benefitOneImg,
  bullets: [
    {
      title: "Kurangi pakaian tidak terpakai",
      desc: "Setorkan",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Cegah penumpukan/pembakaran di TPA",
      desc: "Stop buang ke tempat sampah lebih banyak",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Dapatkan POIN setelah menyetor",
      desc: "Tukar POIN menjadi Pakaian, Tas dsb ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ajakan Kerja sama dengan Mitra dan CSR",
  desc: "Revive mengundang perusahaan dan organisasi untuk berkolaborasi dalam upaya menciptakan industri fashion yang lebih berkelanjutan melalui program Corporate Social Responsibility (CSR) dan kemitraan strategis. ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Kerja Sama Perusahaan CSR",
      desc: "Kembangkan Brand Awareness Perusahaan dalam Mendukung Sustainablity",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Mitra Daur Ulang",
      desc: "Dapatkan Kain sesuai kebutuhan, dan pasarkan produkmu lebih jauh",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

  
export {benefitTwo, benefitOne };
