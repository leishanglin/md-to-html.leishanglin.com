import { useFilePicker } from "./hooks/useFilePicker";

export const App = () => {
  const filePicker = useFilePicker({
    accept: [".md"],
    maxSize: 1024 * 1024 * 10,
  });

  return (
    <div className="h-screen w-screen bg-zinc-50 text-zinc-950 flex items-start justify-center overflow-y-auto">
      <div className="px-8 py-30 w-full flex flex-col gap-10 text-sm leading-8 sm:w-150 sm:px-5">
        <header>
          <h1 className="leading-20 text-base font-bold text-center">
            Markdown 转 HTML
          </h1>

          <p>Hello, World!</p>

          <div className="flex gap-3 mt-6">
            <span>更新于: 3 天前</span>
            <div className="flex-1 w-0 flex justify-end gap-3">
              <span className="">开发者:</span>

              <a
                href="https://cv.ujiu.cc/"
                target="_blank"
                className="underline decoration-dashed underline-offset-6 hover:decoration-solid "
              >
                leishanglin
              </a>
            </div>
          </div>
        </header>

        <main className="flex justify-center items-center flex-col gap-1">
          <button
            className="leading-8 px-4 py-1 rounded-md bg-zinc-200 cursor-pointer"
            onClick={() => {
              filePicker.openFilePicker();
            }}
          >
            选择 .md 文件
          </button>

          <div className="flex">
            <div>{filePicker.file?.name}</div>
            <div className="text-rose-500">{filePicker.error}</div>
          </div>
          {/* <button className="leading-8 px-4 py-1 rounded-md bg-green-500 text-white cursor-pointer">
            下载压缩包
          </button> */}
        </main>
      </div>
    </div>
  );
};
