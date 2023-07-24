import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/solid";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 ">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQFya4MB614hdw/profile-displayphoto-shrink_200_200/0/1611330994238?e=1689811200&v=beta&t=fXnFfgq2duZh0x28seeJOPquL6BVuc1mP0_SV7Dn5Ks"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full">
        <div className="w-full divide-y divide-gray-200 border-b">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder:gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="what's happening"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
