import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// 引入中文支持（可选）
import "dayjs/locale/zh-cn";

// 加载插件
dayjs.extend(relativeTime);

dayjs.locale("zh-cn"); // 设置语言为中文

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
