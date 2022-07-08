import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function SearchBox({ search, searchInputRef }) {
  return (
    <form className='flex flex-col items-center mt-34 flex-grow w-4/5'>
      <Image
        src={
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        }
        width={300}
        height={100}
        alt='logo'
      />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input
          type='text'
          ref={searchInputRef}
          className='focus:outline-none flex-grow'
        />
        <MicrophoneIcon className='h-5' />
      </div>

      <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button className='btn' onClick={search}>
          Google Search
        </button>
        <button className='btn' onClick={search}>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
