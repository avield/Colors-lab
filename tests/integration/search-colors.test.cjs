const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn, spawnSync } = require("node:child_process");

const HOST = "127.0.0.1";
const PORT = 8123;
const BASE_URL = `http://${HOST}:${PORT}`;

function startPhpServer() {
  const server = spawn(
    "php",
    ["-S", `${HOST}:${PORT}`, "-t", "."],
    {
      cwd: process.cwd(),
      env: process.env
    }
  );

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      server.kill();
      reject(new Error("Timed out waiting for PHP test server to start."));
    }, 5000);

    server.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("Development Server")) {
        clearTimeout(timeout);
        resolve(server);
      }
    });

    server.stderr.on("data", (chunk) => {
      if (chunk.toString().includes("Development Server")) {
        clearTimeout(timeout);
        resolve(server);
      }
    });

    server.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });

    server.on("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`PHP test server exited early with code ${code}.`));
    });
  });
}

test("PHP login-style endpoint returns the expected JSON error structure", async (t) => {
  const phpCheck = spawnSync("php", ["-v"], { stdio: "ignore" });

  if (phpCheck.error) {
    t.skip("PHP is not installed locally. This test will run in GitHub Actions.");
    return;
  }

  const server = await startPhpServer();

  t.after(() => {
    server.kill();
  });

  const response = await fetch(`${BASE_URL}/tests/integration/fixtures/login-response.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: "missing-user",
      password: "bad-password"
    })
  });

  assert.equal(response.status, 200);

  const payload = await response.json();

  assert.deepEqual(Object.keys(payload).sort(), ["error", "firstName", "id", "lastName"]);
  assert.equal(typeof payload.id, "number");
  assert.equal(typeof payload.firstName, "string");
  assert.equal(typeof payload.lastName, "string");
  assert.equal(typeof payload.error, "string");
  assert.equal(payload.id, 0);
});
