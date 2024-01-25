import Image from 'next/image';
import { ReactNode } from 'react';
import Newbackground from '../../public/newbackground.jpeg';
import Logo from '../../public/EkpetiUghe-logo.png';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Newbackground}
        alt="backgroungimg"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={Logo}
        alt="Logo"
        height={220}
        width={180}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
}
