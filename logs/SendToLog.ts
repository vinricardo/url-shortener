import fs from 'fs';

export function writeOnLog(message: string) {
  fs.appendFile(
    "./logs/all-logs.txt",
    `
  [${new Date().toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}] ${message}
  `,
    (err: any) => {}
  );
}
