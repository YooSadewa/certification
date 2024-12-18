import { AuroraBackground } from "@/components/ui/aurora-background";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Calendar from "@/components/calendar";
import { PinContainer } from "@/components/ui/3d-pin";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930990.jpg?ga=GA1.1.1657720062.1702296363&semt=ais_hybrid",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-vector/geometric-colorful-education-charity-volunteer-certificate_742173-8304.jpg?t=st=1734317892~exp=1734321492~hmac=3a0e55336a10ba4b88307d794b52b4d2ae641c53d863ece2e25efee6196aabc7&w=1060",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-vector/gradient-sport-certificate-template_23-2149494261.jpg?ga=GA1.1.1657720062.1702296363&semt=ais_hybrid",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/free-photo/graudate-student-with-paper-looking-somewhere-high-quality-photo_144627-73103.jpg?ga=GA1.1.1657720062.1702296363&semt=ais_hybrid",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export const buttons = [
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component1: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5E3A_0%,#9747FF_50%,#FF5E3A_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Yuk kepoin lebih lanjut!
        </span>
      </button>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <div className="flex gap-5">
          <Image
            src={"assets/testicon.svg"}
            alt="jumbotron icon"
            width={400}
            height={200}
            className="pt-[8em] ps-[2.5em] w-[25vw]"
          />
          <div className="flex flex-col w-[75vw]">
            <h1 className="text-3xl md:text-5xl pt-[3em] w-full font-bold mb-3">
              Sertifikasi Universitas Internasional Batam
            </h1>
            <p className="text-justify w-[69vw]">
              Sertifikasi adalah tempat di mana kompetensi profesional Anda
              diakui dan dikembangkan untuk membuat sertifikasi profesi di
              bidang pendidikan dan telah mendapatkan lisensi dari Badan
              Nasional Sertifikasi Profesi (BNSP).
            </p>
            {buttons.map((button) => (
              <ButtonsCard>{button.component1}</ButtonsCard>
            ))}
          </div>
        </div>
        <div className="p-10">
          <div className="flex justify-between ps-24">
            <p className="text-[2em] flex items-center font-bold">
              "Kenapa kami harus mengikuti sertifikasi?"
            </p>
            <Image
              src={"assets/benefit.svg"}
              alt="benefit"
              width={300}
              height={200}
            />
          </div>
          <StickyScroll content={content} />
        </div>
        <div className="flex justify-between px-24 gap-12">
          <p className="flex items-center text-[36px] text-end font-bold mt-12 text-[#272E4F] font-chewy">
            Ada sertifikat menarik nih? Mau tau apa saja? Yuk kepoin!
          </p>
          <Image
            src={"assets/askicon.svg"}
            alt="ask icon"
            width={400}
            height={100}
          />
        </div>
        <div className="h-screen py-5 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </AuroraBackground>
      <Calendar />
      <div className="relative flex flex-col items-center justify-center pt-5 mt-10 -mb-[5px]">
        <div className="relative w-full flex justify-center">
          <Image
            src="/assets/time.svg"
            alt="waiting"
            width={300}
            height={200}
            className="opacity-20"
          />
        </div>

        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
          <p className="text-center font-semibold text-3xl">
            Jadi mau tunggu apa lagi? Buruan ikutan sekarang juga Kuota terbatas
            lohh~~
          </p>
          <div className="w-full text-center mt-5">
            <button className="relative m-auto inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5E3A_0%,#9747FF_50%,#FF5E3A_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Tanya seputar sertifikasi & seminar?
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-12 bg-[#272E4F]">
        <Image
          src={"/assets/linefoot.svg"}
          alt="line foot"
          width={1440}
          height={100}
          className="mb-5"
        />
        <div className="flex justify-around text-white">
          <div className="w-[30%] flex flex-col gap-4 px-5 py-5">
            <Image
              src={"/assets/uibfoot.webp"}
              alt="footer"
              width={300}
              height={200}
            />
            <p className="w-full">
              Baloi-Sei Ladi, Jl. Gajah Mada, Tiban Indah, Kec. Sekupang, Kota
              Batam, Kepulauan Riau 29426 (0778) 7437111
            </p>
          </div>
          <div className="flex flex-col gap-4 px-5 py-5">
            <h1 className="font-bold text-3xl">Informasi Kami</h1>
            <ul className="ps-3 flex flex-col gap-3">
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Kehidupan Kampus</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Kemahasiswaan</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Kemitraan</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Perpustakaan</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Penjaminan Mutu Internal</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Pusat Pengembangan Akademik</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>SDG's</Link>
              </li>
              <li className="font-[600] hover:text-[#F7B500]">
                <Link href={""}>Unduh Dokumen</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 px-5 py-5">
            <PinContainer
              title="Universitas Internasional Batam"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                  Ayo kunjungi Alamat Kami
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-[#272E4F]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.056687477547!2d104.00046797460047!3d1.1195430988697368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sUniversitas%20Internasional%20Batam!5e0!3m2!1sid!2sid!4v1734403582604!5m2!1sid!2sid"
                  className="flex flex-1 w-full rounded-lg mt-4"
                />
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
