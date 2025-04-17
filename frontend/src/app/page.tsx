import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-[16px] items-center sm:items-start">
          <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
            <div className="flex flex-col gap-2 bg-white rounded-2xl p-6 shadow-md">
              <h1 className="text-[32px] font-bold leading-[40px]">
                Websocket Chat
              </h1>
              <p className="text-[16px] text-gray-500">
                A simple chat application using Websockets
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Mlodovico/real-time-chat-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Websocket chat →
        </a>
      </footer>
    </div>
  );
}
