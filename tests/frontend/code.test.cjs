const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const codePath = path.join(__dirname, "../../public/js/code.js");
const source = fs.readFileSync(codePath, "utf8");

function loadCodeWithEnvironment({ cookie = "", userNameText = "" } = {}) {
  const elements = {
    userName: { innerHTML: userNameText }
  };

  const paragraph = { innerHTML: "" };

  const document = {
    cookie,
    getElementById(id) {
      if (!elements[id]) {
        elements[id] = { value: "", innerHTML: "" };
      }

      return elements[id];
    },
    getElementsByTagName(tagName) {
      if (tagName === "p") {
        return [paragraph];
      }

      return [];
    }
  };

  const window = {
    location: {
      href: ""
    }
  };

  const context = {
    console,
    document,
    window,
    XMLHttpRequest: function XMLHttpRequest() {},
    md5(value) {
      return value;
    }
  };

  vm.createContext(context);
  vm.runInContext(source, context);

  return {
    context,
    document,
    window,
    elements,
    paragraph
  };
}

test("readCookie redirects to index.html when userId is missing", () => {
  const { context, window } = loadCodeWithEnvironment({
    cookie: "firstName=Sam,lastName=Blue"
  });

  context.readCookie();

  assert.equal(window.location.href, "index.html");
});

test("readCookie fills in the logged-in user label when cookie data is present", () => {
  const { context, elements } = loadCodeWithEnvironment({
    cookie: "firstName=Sam,lastName=Blue,userId=42"
  });

  context.readCookie();

  assert.equal(elements.userName.innerHTML, "Logged in as Sam Blue");
});
