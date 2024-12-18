import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-white rounded-b-[24px] fixed z-50 drop-shadow-xl">
      <div className="flex-1">
        <Link href={"https://www.uib.ac.id/"} className="text-xl ms-[120px]">
          <img
            src="https://www.uib.ac.id/wp-content/uploads/2024/01/Logo-Panjang-UIB.png"
            alt=""
            className="h-[38px]"
          />
        </Link>
      </div>
      <div className="flex-none me-[120px]">
        <ul className="text-[14px] px-1 me-10 flex gap-[30px]">
          <li>
            <Link href={"/"}>Beranda</Link>
          </li>
          <li>
            <Link href={"/"}>Sertifikasi</Link>
          </li>
          <li>
            <Link href={"/"}>Seminar</Link>
          </li>
          <li>
            <Link href={"/"}>Berita</Link>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="dropdown dropdown-end">
              <summary className="hover:bg-[#FF5E3A]">Login</summary>
              <ul className="dropdown-content shadow-[0px_4px_10px_rgba(255,94,58,0.5)] rounded-t-none p-2 w-[245px]">
                <li>
                  <Link href={"/mahasiswa"} className="ms-auto">
                    Login Sebagai Mahasiswa
                  </Link>
                </li>
                <hr className="w-[30%] m-auto bg-[#FF5E3A]" />
                <li>
                  <Link href={"/dosen"} className="ms-auto">
                    Login Sebagai Dosen
                  </Link>
                </li>
                <hr className="w-[30%] m-auto bg-[#FF5E3A]" />
                <li>
                  <Link href={"/umum"} className="ms-auto">
                    Login Sebagai Umum
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
