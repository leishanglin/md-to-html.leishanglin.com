import { useTimer } from "./hooks/useTimer";

export const App = () => {
  const timer = useTimer();

  return (
    <div className="h-screen w-screen bg-[#f7f7f7] flex items-start justify-center overflow-y-auto">
      <div className="px-8 py-30 w-full flex flex-col gap-10 text-sm leading-8 sm:w-150 sm:px-5">
        <header>
          <h1 className="leading-20 text-base font-bold text-center">
            Markdown 转 HTML
          </h1>

          <p className="text-gray-500">
            一些小项目，用一个 Markdown 就可以完整介绍。为了方便分享，将
            Markdown 转为 HTML 是个不错的选择。
          </p>

          <div className="flex gap-3 mt-6">
            <span className="text-gray-500">更新于: 3 天前</span>
            <div className="flex-1 w-0 flex justify-end gap-3">
              <span className="text-gray-700">开发者:</span>

              <a
                href="https://cv.ujiu.cc/"
                target="_blank"
                className="text-gray-500 underline decoration-dashed underline-offset-6 hover:decoration-solid "
              >
                leishanglin
              </a>
            </div>
          </div>
        </header>

        <main className="flex justify-center">
          <button className="leading-8 px-4 py-1 rounded-md bg-white cursor-pointer hover:bg-zinc-200 active:bg-zinc-300">
            选择 .md 文件
          </button>
          {/* <button className="leading-8 px-4 py-1 rounded-md bg-green-500 text-white cursor-pointer hover:bg-zinc-200 active:bg-zinc-300">
            下载压缩包
          </button> */}
        </main>
      </div>
    </div>
  );
};
