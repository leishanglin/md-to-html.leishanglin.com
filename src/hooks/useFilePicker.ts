import { formatBytes } from "@leishanglin/utils";
import { useState, useCallback } from "react";

interface UseFilePickerOptions {
  accept?: string[]; // 允许的文件后缀，例如 ['.jpg', '.png']
  maxSize?: number; // 最大文件大小，单位字节
}

interface UseFilePickerResult {
  file: File | null;
  error: string | null;
  openFilePicker: () => void;
  reset: () => void;
}

export const useFilePicker = (
  options: UseFilePickerOptions = {},
): UseFilePickerResult => {
  const { accept = [], maxSize } = options;
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const openFilePicker = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";

    if (accept.length > 0) {
      input.accept = accept.join(",");
    }

    input.onchange = () => {
      const selectedFile = input.files?.[0];
      if (!selectedFile) return;

      // 检查文件后缀
      if (accept.length > 0) {
        const ext = "." + selectedFile.name.split(".").pop()?.toLowerCase();
        if (!accept.includes(ext)) {
          setError(`格式不对，仅支持: ${accept.join(", ")} 结尾的文件`);
          setFile(null);
          return;
        }
      }

      // 检查大小
      if (maxSize && selectedFile.size > maxSize) {
        setError(`文件过大，最大支持 ${formatBytes(maxSize)}`);
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setError(null);
    };

    input.click();
  }, [accept, maxSize]);

  const reset = useCallback(() => {
    setFile(null);
    setError(null);
  }, []);

  return { file, error, openFilePicker, reset };
};
