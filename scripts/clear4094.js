const { exec } = require("child_process");

const clearCacheAndReinstall = () => {
  console.log("Cache clearing started...");

  // .next, yarn.lock, node_modules 삭제
  exec("rm -rf .next yarn.lock node_modules", err => {
    if (err) {
      console.error("Error while deleting files:", err);
      return;
    }
    console.log("Cache files deleted. Reinstalling dependencies...");

    // yarn install 실행
    exec("yarn install", err => {
      if (err) {
        console.error("Error while installing dependencies:", err);
        return;
      }
      console.log("Dependencies reinstalled. Starting server...");

      // Next.js 서버 재시작
      exec("yarn dev", err => {
        if (err) {
          console.error("Error while starting server:", err);
          return;
        }
        console.log("Server restarted successfully.");
      });
    });
  });
};

clearCacheAndReinstall();
