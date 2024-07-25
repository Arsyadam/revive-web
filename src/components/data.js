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
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Kurangi pakaian tidak terpakai",
      desc: "Setorkan",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Cegah penumpukan/pembakaran di TPA",
      desc: "Here you can add the next benefit point.",
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
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
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

const data = {
  title: "Cara Instal",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
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
