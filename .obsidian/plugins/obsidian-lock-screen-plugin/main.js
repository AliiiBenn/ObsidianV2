/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => MyPlugin
});
var o5 = __toModule(require("obsidian"));

// src/dom-service.ts
var ids = [];
var domService = {
  createEl: (parentEl, elType, id) => {
    const el = parentEl.createEl(elType);
    el.id = id;
    ids.push(id);
    return el;
  },
  cleanUp: () => {
    var _a;
    for (const id of ids) {
      (_a = document.getElementById(id)) == null ? void 0 : _a.remove();
    }
    ids.length = 0;
  }
};

// src/global-state.ts
var globalState = {};

// src/settings/init-settings.ts
var settings = {
  password: "",
  timeoutWindowBlur: 3e4,
  timeoutInteraction: 3e4
};
var hasInitialized = false;
var initSettings = () => __async(void 0, null, function* () {
  Object.assign(settings, yield globalState.plugin.loadData());
  hasInitialized = true;
  return settings;
});
var getSettings = () => {
  if (hasInitialized)
    return settings;
  throw new Error("getSettings() called before initSettings() has finished");
};

// src/settings/add-settings-tab.ts
var o2 = __toModule(require("obsidian"));

// src/settings/create-settings-tab.ts
var o = __toModule(require("obsidian"));
var createSettingsTab = (plugin, display) => {
  class SettingTab extends o.PluginSettingTab {
    constructor(plugin2) {
      super(plugin2.app, plugin2);
      this.hasDisplayed = false;
    }
    display() {
      if (this.hasDisplayed)
        return;
      display(this);
      this.hasDisplayed = true;
    }
  }
  return new SettingTab(plugin);
};

// src/settings/add-settings-tab.ts
var cleanNumericVal = (text, value) => {
  const parsedVal = parseInt(value, 10) || 0;
  text.setValue(value ? String(parsedVal) : value);
  return parsedVal;
};
var addSettingsTab = () => {
  const settings2 = getSettings();
  const { plugin } = globalState;
  plugin.addSettingTab(createSettingsTab(plugin, ({ containerEl }) => {
    new o2.Setting(containerEl).setName("Password").setDesc("Lock screen password.").addText((text) => text.setValue(settings2.password).onChange((value) => __async(void 0, null, function* () {
      settings2.password = value;
      yield plugin.saveData(settings2);
    })));
    if (o2.Platform.isDesktopApp) {
      new o2.Setting(containerEl).setName("Delay before showing lock screen (Desktop)").setDesc("After the window loses focus, wait this many seconds before showing the lock screen.").addText((text) => text.setValue(String(settings2.timeoutWindowBlur / 1e3)).onChange((value) => __async(void 0, null, function* () {
        const parsedVal = cleanNumericVal(text, value);
        settings2.timeoutWindowBlur = parsedVal * 1e3;
        yield plugin.saveData(settings2);
      })));
    } else {
      const setting = new o2.Setting(containerEl).setName("Delay before showing lock screen (Mobile)").setDesc("Show the lock screen after this many seconds without interaction.").addText((text) => text.setValue(String(settings2.timeoutInteraction / 1e3)).onChange((value) => __async(void 0, null, function* () {
        const parsedVal = cleanNumericVal(text, value);
        settings2.timeoutInteraction = Math.max(parsedVal * 1e3, 5e3);
        yield plugin.saveData(settings2);
      })));
      const msgEl = setting.descEl.createEl("span");
      msgEl.classList.add("mod-warning");
      msgEl.innerText = " Values lower than 5s can make the app unusable and will therefore default to 5s instead.";
    }
  }));
};

// src/show-lock-screen.ts
var o3 = __toModule(require("obsidian"));
var isVisible = false;
var hideLockScreen = (container) => {
  var _a;
  container.remove();
  isVisible = false;
  (_a = globalState.plugin.app.workspace.getActiveViewOfType(o3.MarkdownView)) == null ? void 0 : _a.editor.focus();
};
var showNoPasswordMsg = (container) => {
  const msg = container.createEl("div");
  Object.assign(msg.style, {
    fontSize: "2rem",
    height: "auto",
    width: "100%",
    textAlign: "center",
    margin: "auto"
  });
  const txt = msg.createEl("p");
  txt.innerText = "No lock screen password has been set yet. Add one in the plugin settings.";
  const okBtn = msg.createEl("button");
  Object.assign(okBtn.style, {
    fontSize: "2rem"
  });
  okBtn.innerText = "Ok";
  okBtn.addEventListener("click", () => {
    hideLockScreen(container);
  });
};
var showPasswordField = (container) => {
  const settings2 = getSettings();
  const checkPassword = (showError) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (input.value !== settings2.password) {
      if (showError) {
        const { color } = input.style;
        input.style.color = "#C00";
        setTimeout(() => {
          input.style.color = color;
        }, 250);
      }
      return;
    }
    hideLockScreen(container);
  };
  const form = container.createEl("form");
  form.onsubmit = checkPassword(true);
  Object.assign(form.style, {
    margin: "auto",
    padding: "0 2rem"
  });
  const input = form.createEl("input");
  input.type = "password";
  Object.assign(input.style, {
    fontSize: "5rem",
    height: "auto",
    width: "100%",
    textAlign: "center",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    boxShadow: "none"
  });
  input.addEventListener("keydown", (e) => {
    if (e.key !== "Escape")
      return;
    input.value = "";
    input.focus();
  });
  input.addEventListener("keyup", checkPassword(false));
  input.addEventListener("blur", () => input.focus());
  input.focus();
};
var showLockScreen = () => {
  if (isVisible)
    return;
  isVisible = true;
  const settings2 = getSettings();
  const container = domService.createEl(document.body, "div", "edb--lock-screen--container");
  Object.assign(container.style, {
    background: "var(--background-secondary)",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "999999999",
    display: "flex"
  });
  if (settings2.password) {
    showPasswordField(container);
  } else {
    showNoPasswordMsg(container);
  }
};

// src/show-lock-screen-command.ts
var addShowLockScreenCommand = () => {
  globalState.plugin.addCommand({
    id: "lock-screen",
    name: "Lock screen",
    callback: showLockScreen
  });
};

// src/show-lock-screen-event-listeners.ts
var o4 = __toModule(require("obsidian"));
var showLockScreenOnWindowBlur = (plugin) => {
  let timeout;
  const ms = getSettings().timeoutWindowBlur;
  plugin.registerDomEvent(window, "blur", () => {
    timeout = setTimeout(showLockScreen, ms);
  });
  plugin.registerDomEvent(window, "focus", () => {
    if (timeout)
      clearTimeout(timeout);
  });
};
var showLockScreenWhenInteractionStops = (plugin) => {
  const ms = Math.max(getSettings().timeoutInteraction, 5e3);
  let timeout = setTimeout(showLockScreen, ms);
  const resetTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(showLockScreen, ms);
  };
  const documentEvents = [
    "keydown",
    "keyup",
    "scroll",
    "mousemove",
    "mousedown",
    "mouseup",
    "touchstart",
    "touchend",
    "wheel"
  ];
  for (const e of documentEvents) {
    plugin.registerDomEvent(document, e, resetTimeout);
  }
};
var showLockScreenWhenBackgrounded = () => {
  const { plugin } = globalState;
  if (o4.Platform.isDesktopApp) {
    showLockScreenOnWindowBlur(plugin);
  } else {
    showLockScreenWhenInteractionStops(plugin);
  }
};

// src/main.ts
var MyPlugin = class extends o5.Plugin {
  onload() {
    return __async(this, null, function* () {
      var _a;
      globalState.plugin = this;
      yield initSettings();
      showLockScreen();
      addSettingsTab();
      addShowLockScreenCommand();
      showLockScreenWhenBackgrounded();
      (_a = this.app.workspace.getActiveViewOfType(o5.MarkdownView)) == null ? void 0 : _a.editor.focus();
    });
  }
  onunload() {
    return __async(this, null, function* () {
      domService.cleanUp();
    });
  }
};