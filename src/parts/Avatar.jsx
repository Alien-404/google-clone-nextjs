import Image from 'next/image';

export default function Avatar({ src, cutsomClass }) {
  return (
    <div className={`relative h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${cutsomClass && cutsomClass}`}>
      <Image src={src} layout='fill' objectFit='contain' alt='avatar' />
    </div>
  );
}
