"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [room, setRoom] = useState("");

  const sendMessage = () => {
    console.log("Sending mesage to the server");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-[16px] items-center sm:items-start">
          <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
            <div
              className="flex justify-center gap-2 rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(67, 67, 67, 0.7)",
                minWidth: "800px",
                minHeight: "400px",
              }}
            >
              <div className="flex w-full gap-2">
                <div
                  className="w-1/4 justify-center p-3 rounded h-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(67, 67, 67, 0.1), rgba(0,0,0,0.4))",
                  }}
                >
                  <p className="text-xl font-bold text-white">Chat Rooms</p>
                  <div>Bank Team</div>
                </div>
                <div className="h-100 w-1 rounded-2xl bg-emerald-50" />
                <div
                  className="h-100 w-full rounded"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(67, 67, 67, 0.1), rgba(0,0,0,0.4))",
                  }}
                >
                  <div className="flex flex-col justify-center p-3">
                    <p className="text-xl font-bold text-white">
                      Enter yout username:{"  "}
                    </p>
                    <div>
                      <input
                        type="text"
                        value={nickname}
                        placeholder="Username"
                        onChange={(e) => setNickname(e.target.value)}
                        className=" text-gray-900 rounded px-2 py-1 mx-0.5"
                        maxLength={20}
                        minLength={3}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                        }}
                        autoComplete="off"
                      />
                      <button
                        className="bg-emerald-50 text-gray-900 rounded px-4 py-1 mx-0.5"
                        onClick={() => {
                          console.log(nickname);
                          setNickname("");
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col h-78 rounded-3xl justify-end p-3">
                    <div className="flex w-12/12  p-2">
                      <input
                        type="chat"
                        className="w-11/12 h-10 rounded-2xl mr-2 p-2"
                        style={{ backgroundColor: "rgba(95,95,95, 1)" }}
                      />
                      <button
                        onClick={() => {
                          sendMessage();
                        }}
                        className="h-10 w-10 rounded-full justify-center flex items-center"
                        type="submit"
                        aria-label="Send message"
                        style={{ backgroundColor: "rgb(89, 49, 177)" }}
                      >
                        <AiOutlineArrowRight
                          className="text-white text-2xl"
                          style={{ marginTop: "2px" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
