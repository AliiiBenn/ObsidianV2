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

// main.ts
__export(exports, {
  default: () => CustomFramesPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var defaultSettings = {
  frames: [],
  padding: 5
};
var presets = {
  "keep": {
    url: "https://keep.google.com",
    displayName: "Google Keep",
    icon: "files",
    minimumWidth: 370,
    customCss: `/* hide the menu bar and the "Keep" text */
.PvRhvb-qAWA2, .gb_2d.gb_Zc { 
	display: none !important; 
}`
  }
};
var CustomFramesPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      for (let frame of this.settings.frames) {
        if (!frame.url || !frame.displayName)
          continue;
        let name = `custom-frames-${frame.displayName.toLowerCase().replace(/\s/g, "-")}`;
        try {
          console.log(`Registering frame ${name} for URL ${frame.url}`);
          this.registerView(name, (l) => new CustomFrameView(l, this.settings, frame, name));
          this.addCommand({
            id: `open-${name}`,
            name: `Open ${frame.displayName}`,
            callback: () => this.openLeaf(name)
          });
        } catch (e) {
          console.error(`Couldn't register frame ${name}, is there already one with the same name?`);
        }
      }
      this.addSettingTab(new CustomFramesSettingTab(this.app, this));
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, defaultSettings, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  openLeaf(name) {
    return __async(this, null, function* () {
      if (!this.app.workspace.getLeavesOfType(name).length)
        yield this.app.workspace.getRightLeaf(false).setViewState({ type: name });
      this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(name)[0]);
    });
  }
};
var CustomFrameView = class extends import_obsidian.ItemView {
  constructor(leaf, settings, frame, name) {
    super(leaf);
    this.settings = settings;
    this.frame = frame;
    this.name = name;
  }
  onload() {
    this.contentEl.empty();
    this.contentEl.addClass("custom-frames-view");
    let frame = this.contentEl.createEl("iframe");
    frame.addClass("custom-frames-frame");
    frame.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
    frame.setAttribute("allow", "encrypted-media; fullscreen; oversized-images; picture-in-picture; sync-xhr; geolocation;");
    frame.setAttribute("style", `padding: ${this.settings.padding}px`);
    frame.onload = () => {
      if (import_obsidian.Platform.isDesktopApp) {
        for (let other of require("electron").remote.getCurrentWebContents().mainFrame.frames) {
          if (frame.src.contains(new URL(other.url).host)) {
            other.executeJavaScript(`
						let style = document.createElement("style");
						style.textContent = \`${this.frame.customCss}\`;
						document.head.appendChild(style);
					`);
          }
        }
      }
      if (import_obsidian.Platform.isDesktop && this.frame.minimumWidth) {
        let parent = this.contentEl.closest(".workspace-split.mod-horizontal");
        if (parent) {
          let minWidth = `${this.frame.minimumWidth + 2 * this.settings.padding}px`;
          if (parent.style.width < minWidth)
            parent.style.width = minWidth;
        }
      }
    };
    frame.src = this.frame.url;
  }
  getViewType() {
    return this.name;
  }
  getDisplayText() {
    return this.frame.displayName;
  }
  getIcon() {
    return this.frame.icon ? `lucide-${this.frame.icon}` : "documents";
  }
};
var CustomFramesSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "Custom Frames Settings" });
    this.containerEl.createEl("p", { text: "Note that Obsidian has to be restarted or reloaded for most of these settings to take effect.", cls: "mod-warning" });
    new import_obsidian.Setting(this.containerEl).setName("Frame Padding").setDesc("The padding that should be left around the inside of custom frame panes, in pixels.").addText((t) => {
      t.inputEl.type = "number";
      t.setValue(String(this.plugin.settings.padding));
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.padding = v.length ? Number(v) : defaultSettings.padding;
        yield this.plugin.saveSettings();
      }));
    });
    for (let frame of this.plugin.settings.frames) {
      let heading = this.containerEl.createEl("h3", { text: frame.displayName || "Unnamed Frame" });
      new import_obsidian.Setting(this.containerEl).setName("Display Name").setDesc("The display name that this frame should have.").addText((t) => {
        t.setValue(frame.displayName);
        t.onChange((v) => __async(this, null, function* () {
          frame.displayName = v;
          heading.setText(frame.displayName || "Unnamed Frame");
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian.Setting(this.containerEl).setName("Icon").setDesc(createFragment((f) => {
        f.createSpan({ text: "The icon that this frame's pane should have." });
        f.createEl("br");
        f.createSpan({ text: "The names of any " });
        f.createEl("a", { text: "Lucide icons", href: "https://lucide.dev/" });
        f.createSpan({ text: " can be used." });
      })).addText((t) => {
        t.setValue(frame.icon);
        t.onChange((v) => __async(this, null, function* () {
          frame.icon = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian.Setting(this.containerEl).setName("URL").setDesc("The URL that should be opened in this frame.").addText((t) => {
        t.setValue(frame.url);
        t.onChange((v) => __async(this, null, function* () {
          frame.url = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian.Setting(this.containerEl).setName("Minimum Width").setDesc(createFragment((f) => {
        f.createSpan({ text: "The width that this frame's pane should be adjusted to automatically if it is lower. Set to 0 to disable." });
        f.createEl("br");
        f.createEl("em", { text: "Note that this is only applied on Desktop devices." });
      })).addText((t) => {
        t.inputEl.type = "number";
        t.setValue(String(frame.minimumWidth));
        t.onChange((v) => __async(this, null, function* () {
          frame.minimumWidth = v.length ? Number(v) : 0;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian.Setting(this.containerEl).setName("Additional CSS").setDesc(createFragment((f) => {
        f.createSpan({ text: "A snippet of additional CSS that should be applied to this frame." });
        f.createEl("br");
        f.createEl("em", { text: "Note that this is only applied on Desktop devices." });
      })).addTextArea((t) => {
        t.inputEl.rows = 5;
        t.inputEl.cols = 50;
        t.setValue(frame.customCss);
        t.onChange((v) => __async(this, null, function* () {
          frame.customCss = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian.ButtonComponent(this.containerEl).setButtonText("Remove Frame").onClick(() => __async(this, null, function* () {
        this.plugin.settings.frames.remove(frame);
        yield this.plugin.saveSettings();
        this.display();
      }));
    }
    this.containerEl.createEl("hr");
    let info = this.containerEl.createEl("p", { text: `Create a new frame, either from a preset shipped with the plugin, or a custom one that you can edit yourself. Each frame's pane can be opened using the "Custom Frames: Open" command.` });
    info.createEl("br");
    info.createSpan({ text: "Note that Obsidian has to be restarted or reloaded to activate a newly added frame.", cls: "mod-warning" });
    let addDiv = this.containerEl.createDiv();
    addDiv.addClass("custom-frames-add");
    let dropdown = new import_obsidian.DropdownComponent(addDiv);
    dropdown.addOption("new", "Custom");
    for (let key of Object.keys(presets))
      dropdown.addOption(key, presets[key].displayName);
    new import_obsidian.ButtonComponent(addDiv).setButtonText("Add Frame").onClick(() => __async(this, null, function* () {
      let option = dropdown.getValue();
      if (option == "new") {
        this.plugin.settings.frames.push({
          url: "",
          displayName: "",
          icon: "",
          minimumWidth: 0,
          customCss: ""
        });
      } else {
        this.plugin.settings.frames.push(presets[option]);
      }
      yield this.plugin.saveSettings();
      this.display();
    }));
    this.containerEl.createEl("hr");
    this.containerEl.createEl("p", { text: "If you like this plugin and want to support its development, you can do so through my website by clicking this fancy image!" });
    this.containerEl.createEl("a", { href: "https://ellpeck.de/support" }).createEl("img", { attr: { src: "https://ellpeck.de/res/generalsupport.png" }, cls: "custom-frames-support" });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBCdXR0b25Db21wb25lbnQsIERyb3Bkb3duQ29tcG9uZW50LCBJdGVtVmlldywgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBXb3Jrc3BhY2VMZWFmLCBQbGF0Zm9ybSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBDdXN0b21GcmFtZXNTZXR0aW5ncyA9IHtcclxuXHRmcmFtZXM6IFtdLFxyXG5cdHBhZGRpbmc6IDVcclxufTtcclxuY29uc3QgcHJlc2V0czogUmVjb3JkPHN0cmluZywgQ3VzdG9tRnJhbWU+ID0ge1xyXG5cdFwia2VlcFwiOiB7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9rZWVwLmdvb2dsZS5jb21cIixcclxuXHRcdGRpc3BsYXlOYW1lOiBcIkdvb2dsZSBLZWVwXCIsXHJcblx0XHRpY29uOiBcImZpbGVzXCIsXHJcblx0XHRtaW5pbXVtV2lkdGg6IDM3MCxcclxuXHRcdGN1c3RvbUNzczogYC8qIGhpZGUgdGhlIG1lbnUgYmFyIGFuZCB0aGUgXCJLZWVwXCIgdGV4dCAqL1xyXG4uUHZSaHZiLXFBV0EyLCAuZ2JfMmQuZ2JfWmMgeyBcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IFxyXG59YFxyXG5cdH1cclxufTtcclxuXHJcbmludGVyZmFjZSBDdXN0b21GcmFtZXNTZXR0aW5ncyB7XHJcblx0ZnJhbWVzOiBDdXN0b21GcmFtZVtdO1xyXG5cdHBhZGRpbmc6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUZyYW1lIHtcclxuXHR1cmw6IHN0cmluZztcclxuXHRkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdGljb246IHN0cmluZztcclxuXHRtaW5pbXVtV2lkdGg6IG51bWJlcjtcclxuXHRjdXN0b21Dc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRnJhbWVzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuXHJcblx0c2V0dGluZ3M6IEN1c3RvbUZyYW1lc1NldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuXHRcdGZvciAobGV0IGZyYW1lIG9mIHRoaXMuc2V0dGluZ3MuZnJhbWVzKSB7XHJcblx0XHRcdGlmICghZnJhbWUudXJsIHx8ICFmcmFtZS5kaXNwbGF5TmFtZSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0bGV0IG5hbWUgPSBgY3VzdG9tLWZyYW1lcy0ke2ZyYW1lLmRpc3BsYXlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBSZWdpc3RlcmluZyBmcmFtZSAke25hbWV9IGZvciBVUkwgJHtmcmFtZS51cmx9YCk7XHJcblxyXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJWaWV3KG5hbWUsIGwgPT4gbmV3IEN1c3RvbUZyYW1lVmlldyhsLCB0aGlzLnNldHRpbmdzLCBmcmFtZSwgbmFtZSkpO1xyXG5cdFx0XHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdFx0XHRpZDogYG9wZW4tJHtuYW1lfWAsXHJcblx0XHRcdFx0XHRuYW1lOiBgT3BlbiAke2ZyYW1lLmRpc3BsYXlOYW1lfWAsXHJcblx0XHRcdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5vcGVuTGVhZihuYW1lKSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ291bGRuJ3QgcmVnaXN0ZXIgZnJhbWUgJHtuYW1lfSwgaXMgdGhlcmUgYWxyZWFkeSBvbmUgd2l0aCB0aGUgc2FtZSBuYW1lP2ApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBDdXN0b21GcmFtZXNTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgb3BlbkxlYWYobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRpZiAoIXRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUobmFtZSkubGVuZ3RoKVxyXG5cdFx0XHRhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKS5zZXRWaWV3U3RhdGUoeyB0eXBlOiBuYW1lIH0pO1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYodGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShuYW1lKVswXSk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBDdXN0b21GcmFtZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcblxyXG5cdHByaXZhdGUgc2V0dGluZ3M6IEN1c3RvbUZyYW1lc1NldHRpbmdzO1xyXG5cdHByaXZhdGUgZnJhbWU6IEN1c3RvbUZyYW1lO1xyXG5cdHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBzZXR0aW5nczogQ3VzdG9tRnJhbWVzU2V0dGluZ3MsIGZyYW1lOiBDdXN0b21GcmFtZSwgbmFtZTogc3RyaW5nKSB7XHJcblx0XHRzdXBlcihsZWFmKTtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHRcdHRoaXMuZnJhbWUgPSBmcmFtZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRvbmxvYWQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xyXG5cdFx0dGhpcy5jb250ZW50RWwuYWRkQ2xhc3MoXCJjdXN0b20tZnJhbWVzLXZpZXdcIik7XHJcblxyXG5cdFx0bGV0IGZyYW1lID0gdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJpZnJhbWVcIik7XHJcblx0XHRmcmFtZS5hZGRDbGFzcyhcImN1c3RvbS1mcmFtZXMtZnJhbWVcIik7XHJcblx0XHRmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiKTtcclxuXHRcdGZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93XCIsIFwiZW5jcnlwdGVkLW1lZGlhOyBmdWxsc2NyZWVuOyBvdmVyc2l6ZWQtaW1hZ2VzOyBwaWN0dXJlLWluLXBpY3R1cmU7IHN5bmMteGhyOyBnZW9sb2NhdGlvbjtcIik7XHJcblx0XHRmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgcGFkZGluZzogJHt0aGlzLnNldHRpbmdzLnBhZGRpbmd9cHhgKTtcclxuXHRcdGZyYW1lLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKFBsYXRmb3JtLmlzRGVza3RvcEFwcCkge1xyXG5cdFx0XHRcdGZvciAobGV0IG90aGVyIG9mIHJlcXVpcmUoXCJlbGVjdHJvblwiKS5yZW1vdGUuZ2V0Q3VycmVudFdlYkNvbnRlbnRzKCkubWFpbkZyYW1lLmZyYW1lcykge1xyXG5cdFx0XHRcdFx0aWYgKGZyYW1lLnNyYy5jb250YWlucyhuZXcgVVJMKG90aGVyLnVybCkuaG9zdCkpIHtcclxuXHRcdFx0XHRcdFx0b3RoZXIuZXhlY3V0ZUphdmFTY3JpcHQoYFxyXG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0XHRcdFx0XHRcdHN0eWxlLnRleHRDb250ZW50ID0gXFxgJHt0aGlzLmZyYW1lLmN1c3RvbUNzc31cXGA7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdFx0XHRcdFx0YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoUGxhdGZvcm0uaXNEZXNrdG9wICYmIHRoaXMuZnJhbWUubWluaW11bVdpZHRoKSB7XHJcblx0XHRcdFx0bGV0IHBhcmVudCA9IHRoaXMuY29udGVudEVsLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KFwiLndvcmtzcGFjZS1zcGxpdC5tb2QtaG9yaXpvbnRhbFwiKTtcclxuXHRcdFx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdFx0XHRsZXQgbWluV2lkdGggPSBgJHt0aGlzLmZyYW1lLm1pbmltdW1XaWR0aCArIDIgKiB0aGlzLnNldHRpbmdzLnBhZGRpbmd9cHhgO1xyXG5cdFx0XHRcdFx0aWYgKHBhcmVudC5zdHlsZS53aWR0aCA8IG1pbldpZHRoKVxyXG5cdFx0XHRcdFx0XHRwYXJlbnQuc3R5bGUud2lkdGggPSBtaW5XaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRmcmFtZS5zcmMgPSB0aGlzLmZyYW1lLnVybDtcclxuXHR9XHJcblxyXG5cdGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmZyYW1lLmRpc3BsYXlOYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0SWNvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuZnJhbWUuaWNvbiA/IGBsdWNpZGUtJHt0aGlzLmZyYW1lLmljb259YCA6IFwiZG9jdW1lbnRzXCI7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBDdXN0b21GcmFtZXNTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblxyXG5cdHBsdWdpbjogQ3VzdG9tRnJhbWVzUGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDdXN0b21GcmFtZXNQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiQ3VzdG9tIEZyYW1lcyBTZXR0aW5nc1wiIH0pO1xyXG5cdFx0dGhpcy5jb250YWluZXJFbC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiBcIk5vdGUgdGhhdCBPYnNpZGlhbiBoYXMgdG8gYmUgcmVzdGFydGVkIG9yIHJlbG9hZGVkIGZvciBtb3N0IG9mIHRoZXNlIHNldHRpbmdzIHRvIHRha2UgZWZmZWN0LlwiLCBjbHM6IFwibW9kLXdhcm5pbmdcIiB9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyh0aGlzLmNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZShcIkZyYW1lIFBhZGRpbmdcIilcclxuXHRcdFx0LnNldERlc2MoXCJUaGUgcGFkZGluZyB0aGF0IHNob3VsZCBiZSBsZWZ0IGFyb3VuZCB0aGUgaW5zaWRlIG9mIGN1c3RvbSBmcmFtZSBwYW5lcywgaW4gcGl4ZWxzLlwiKVxyXG5cdFx0XHQuYWRkVGV4dCh0ID0+IHtcclxuXHRcdFx0XHR0LmlucHV0RWwudHlwZSA9IFwibnVtYmVyXCI7XHJcblx0XHRcdFx0dC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MucGFkZGluZykpO1xyXG5cdFx0XHRcdHQub25DaGFuZ2UoYXN5bmMgdiA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYWRkaW5nID0gdi5sZW5ndGggPyBOdW1iZXIodikgOiBkZWZhdWx0U2V0dGluZ3MucGFkZGluZztcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBmcmFtZSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5mcmFtZXMpIHtcclxuXHRcdFx0bGV0IGhlYWRpbmcgPSB0aGlzLmNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBmcmFtZS5kaXNwbGF5TmFtZSB8fCBcIlVubmFtZWQgRnJhbWVcIiB9KTtcclxuXHJcblx0XHRcdG5ldyBTZXR0aW5nKHRoaXMuY29udGFpbmVyRWwpXHJcblx0XHRcdFx0LnNldE5hbWUoXCJEaXNwbGF5IE5hbWVcIilcclxuXHRcdFx0XHQuc2V0RGVzYyhcIlRoZSBkaXNwbGF5IG5hbWUgdGhhdCB0aGlzIGZyYW1lIHNob3VsZCBoYXZlLlwiKVxyXG5cdFx0XHRcdC5hZGRUZXh0KHQgPT4ge1xyXG5cdFx0XHRcdFx0dC5zZXRWYWx1ZShmcmFtZS5kaXNwbGF5TmFtZSk7XHJcblx0XHRcdFx0XHR0Lm9uQ2hhbmdlKGFzeW5jIHYgPT4ge1xyXG5cdFx0XHRcdFx0XHRmcmFtZS5kaXNwbGF5TmFtZSA9IHY7XHJcblx0XHRcdFx0XHRcdGhlYWRpbmcuc2V0VGV4dChmcmFtZS5kaXNwbGF5TmFtZSB8fCBcIlVubmFtZWQgRnJhbWVcIik7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdG5ldyBTZXR0aW5nKHRoaXMuY29udGFpbmVyRWwpXHJcblx0XHRcdFx0LnNldE5hbWUoXCJJY29uXCIpXHJcblx0XHRcdFx0LnNldERlc2MoY3JlYXRlRnJhZ21lbnQoZiA9PiB7XHJcblx0XHRcdFx0XHRmLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlRoZSBpY29uIHRoYXQgdGhpcyBmcmFtZSdzIHBhbmUgc2hvdWxkIGhhdmUuXCIgfSk7XHJcblx0XHRcdFx0XHRmLmNyZWF0ZUVsKFwiYnJcIik7XHJcblx0XHRcdFx0XHRmLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlRoZSBuYW1lcyBvZiBhbnkgXCIgfSk7XHJcblx0XHRcdFx0XHRmLmNyZWF0ZUVsKFwiYVwiLCB7IHRleHQ6IFwiTHVjaWRlIGljb25zXCIsIGhyZWY6IFwiaHR0cHM6Ly9sdWNpZGUuZGV2L1wiIH0pO1xyXG5cdFx0XHRcdFx0Zi5jcmVhdGVTcGFuKHsgdGV4dDogXCIgY2FuIGJlIHVzZWQuXCIgfSk7XHJcblx0XHRcdFx0fSkpXHJcblx0XHRcdFx0LmFkZFRleHQodCA9PiB7XHJcblx0XHRcdFx0XHR0LnNldFZhbHVlKGZyYW1lLmljb24pO1xyXG5cdFx0XHRcdFx0dC5vbkNoYW5nZShhc3luYyB2ID0+IHtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuaWNvbiA9IHY7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdG5ldyBTZXR0aW5nKHRoaXMuY29udGFpbmVyRWwpXHJcblx0XHRcdFx0LnNldE5hbWUoXCJVUkxcIilcclxuXHRcdFx0XHQuc2V0RGVzYyhcIlRoZSBVUkwgdGhhdCBzaG91bGQgYmUgb3BlbmVkIGluIHRoaXMgZnJhbWUuXCIpXHJcblx0XHRcdFx0LmFkZFRleHQodCA9PiB7XHJcblx0XHRcdFx0XHR0LnNldFZhbHVlKGZyYW1lLnVybCk7XHJcblx0XHRcdFx0XHR0Lm9uQ2hhbmdlKGFzeW5jIHYgPT4ge1xyXG5cdFx0XHRcdFx0XHRmcmFtZS51cmwgPSB2O1xyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRuZXcgU2V0dGluZyh0aGlzLmNvbnRhaW5lckVsKVxyXG5cdFx0XHRcdC5zZXROYW1lKFwiTWluaW11bSBXaWR0aFwiKVxyXG5cdFx0XHRcdC5zZXREZXNjKGNyZWF0ZUZyYWdtZW50KGYgPT4ge1xyXG5cdFx0XHRcdFx0Zi5jcmVhdGVTcGFuKHsgdGV4dDogXCJUaGUgd2lkdGggdGhhdCB0aGlzIGZyYW1lJ3MgcGFuZSBzaG91bGQgYmUgYWRqdXN0ZWQgdG8gYXV0b21hdGljYWxseSBpZiBpdCBpcyBsb3dlci4gU2V0IHRvIDAgdG8gZGlzYWJsZS5cIiB9KTtcclxuXHRcdFx0XHRcdGYuY3JlYXRlRWwoXCJiclwiKTtcclxuXHRcdFx0XHRcdGYuY3JlYXRlRWwoXCJlbVwiLCB7IHRleHQ6IFwiTm90ZSB0aGF0IHRoaXMgaXMgb25seSBhcHBsaWVkIG9uIERlc2t0b3AgZGV2aWNlcy5cIiB9KTtcclxuXHRcdFx0XHR9KSlcclxuXHRcdFx0XHQuYWRkVGV4dCh0ID0+IHtcclxuXHRcdFx0XHRcdHQuaW5wdXRFbC50eXBlID0gXCJudW1iZXJcIjtcclxuXHRcdFx0XHRcdHQuc2V0VmFsdWUoU3RyaW5nKGZyYW1lLm1pbmltdW1XaWR0aCkpO1xyXG5cdFx0XHRcdFx0dC5vbkNoYW5nZShhc3luYyB2ID0+IHtcclxuXHRcdFx0XHRcdFx0ZnJhbWUubWluaW11bVdpZHRoID0gdi5sZW5ndGggPyBOdW1iZXIodikgOiAwO1xyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRuZXcgU2V0dGluZyh0aGlzLmNvbnRhaW5lckVsKVxyXG5cdFx0XHRcdC5zZXROYW1lKFwiQWRkaXRpb25hbCBDU1NcIilcclxuXHRcdFx0XHQuc2V0RGVzYyhjcmVhdGVGcmFnbWVudChmID0+IHtcclxuXHRcdFx0XHRcdGYuY3JlYXRlU3Bhbih7IHRleHQ6IFwiQSBzbmlwcGV0IG9mIGFkZGl0aW9uYWwgQ1NTIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhpcyBmcmFtZS5cIiB9KTtcclxuXHRcdFx0XHRcdGYuY3JlYXRlRWwoXCJiclwiKTtcclxuXHRcdFx0XHRcdGYuY3JlYXRlRWwoXCJlbVwiLCB7IHRleHQ6IFwiTm90ZSB0aGF0IHRoaXMgaXMgb25seSBhcHBsaWVkIG9uIERlc2t0b3AgZGV2aWNlcy5cIiB9KTtcclxuXHRcdFx0XHR9KSlcclxuXHRcdFx0XHQuYWRkVGV4dEFyZWEodCA9PiB7XHJcblx0XHRcdFx0XHR0LmlucHV0RWwucm93cyA9IDU7XHJcblx0XHRcdFx0XHR0LmlucHV0RWwuY29scyA9IDUwO1xyXG5cdFx0XHRcdFx0dC5zZXRWYWx1ZShmcmFtZS5jdXN0b21Dc3MpO1xyXG5cdFx0XHRcdFx0dC5vbkNoYW5nZShhc3luYyB2ID0+IHtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuY3VzdG9tQ3NzID0gdjtcclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdG5ldyBCdXR0b25Db21wb25lbnQodGhpcy5jb250YWluZXJFbClcclxuXHRcdFx0XHQuc2V0QnV0dG9uVGV4dChcIlJlbW92ZSBGcmFtZVwiKVxyXG5cdFx0XHRcdC5vbkNsaWNrKGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmZyYW1lcy5yZW1vdmUoZnJhbWUpO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXkoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaHJcIik7XHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogXCJDcmVhdGUgYSBuZXcgZnJhbWUsIGVpdGhlciBmcm9tIGEgcHJlc2V0IHNoaXBwZWQgd2l0aCB0aGUgcGx1Z2luLCBvciBhIGN1c3RvbSBvbmUgdGhhdCB5b3UgY2FuIGVkaXQgeW91cnNlbGYuIEVhY2ggZnJhbWUncyBwYW5lIGNhbiBiZSBvcGVuZWQgdXNpbmcgdGhlIFxcXCJDdXN0b20gRnJhbWVzOiBPcGVuXFxcIiBjb21tYW5kLlwiIH0pO1xyXG5cdFx0aW5mby5jcmVhdGVFbChcImJyXCIpO1xyXG5cdFx0aW5mby5jcmVhdGVTcGFuKHsgdGV4dDogXCJOb3RlIHRoYXQgT2JzaWRpYW4gaGFzIHRvIGJlIHJlc3RhcnRlZCBvciByZWxvYWRlZCB0byBhY3RpdmF0ZSBhIG5ld2x5IGFkZGVkIGZyYW1lLlwiLCBjbHM6IFwibW9kLXdhcm5pbmdcIiB9KTtcclxuXHJcblx0XHRsZXQgYWRkRGl2ID0gdGhpcy5jb250YWluZXJFbC5jcmVhdGVEaXYoKTtcclxuXHRcdGFkZERpdi5hZGRDbGFzcyhcImN1c3RvbS1mcmFtZXMtYWRkXCIpO1xyXG5cdFx0bGV0IGRyb3Bkb3duID0gbmV3IERyb3Bkb3duQ29tcG9uZW50KGFkZERpdik7XHJcblx0XHRkcm9wZG93bi5hZGRPcHRpb24oXCJuZXdcIiwgXCJDdXN0b21cIik7XHJcblx0XHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlc2V0cykpXHJcblx0XHRcdGRyb3Bkb3duLmFkZE9wdGlvbihrZXksIHByZXNldHNba2V5XS5kaXNwbGF5TmFtZSk7XHJcblx0XHRuZXcgQnV0dG9uQ29tcG9uZW50KGFkZERpdilcclxuXHRcdFx0LnNldEJ1dHRvblRleHQoXCJBZGQgRnJhbWVcIilcclxuXHRcdFx0Lm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBvcHRpb24gPSBkcm9wZG93bi5nZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdGlmIChvcHRpb24gPT0gXCJuZXdcIikge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZnJhbWVzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHR1cmw6IFwiXCIsXHJcblx0XHRcdFx0XHRcdGRpc3BsYXlOYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRtaW5pbXVtV2lkdGg6IDAsXHJcblx0XHRcdFx0XHRcdGN1c3RvbUNzczogXCJcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZnJhbWVzLnB1c2gocHJlc2V0c1tvcHRpb25dKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0dGhpcy5kaXNwbGF5KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoclwiKTtcclxuXHRcdHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogXCJJZiB5b3UgbGlrZSB0aGlzIHBsdWdpbiBhbmQgd2FudCB0byBzdXBwb3J0IGl0cyBkZXZlbG9wbWVudCwgeW91IGNhbiBkbyBzbyB0aHJvdWdoIG15IHdlYnNpdGUgYnkgY2xpY2tpbmcgdGhpcyBmYW5jeSBpbWFnZSFcIiB9KTtcclxuXHRcdHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2VsbHBlY2suZGUvc3VwcG9ydFwiIH0pXHJcblx0XHRcdC5jcmVhdGVFbChcImltZ1wiLCB7IGF0dHI6IHsgc3JjOiBcImh0dHBzOi8vZWxscGVjay5kZS9yZXMvZ2VuZXJhbHN1cHBvcnQucG5nXCIgfSwgY2xzOiBcImN1c3RvbS1mcmFtZXMtc3VwcG9ydFwiIH0pO1xyXG5cdH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtB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
