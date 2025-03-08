import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex gap-5">
      <Image src="/images/header/logo.png" width={100} height={0} alt="logo" />
      <Image
        src="/images/header/logo2.png"
        width={100}
        height={0}
        alt="logo2"
      />
    </Link>
  );
}
