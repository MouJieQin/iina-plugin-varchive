const { standaloneWindow, overlay, sidebar, event, console, menu } = iina;

console.log("Plugin is running");
const VarchiveServer = "http://localhost:5999";

// standaloneWindow.loadFile("dist/ui/window/index.html");

menu.addItem(
    menu.item("Show standalone Window", () => {
        standaloneWindow.loadFile("http://localhost:5999/video/all");
        standaloneWindow.open();
    })
);

// overlay.loadFile("dist/ui/overlay/index.html");

menu.addItem(
    menu.item("Show Video Overlay", () => {
        overlay.loadFile("http://localhost:5999/video/all");
        overlay.show();
    })
);

menu.addItem(
    menu.item("Hide Video Overlay", () => {
        overlay.hide();
    })
);

function loadSideBar(metaFilename) {
    console.log("@@@metaFilename:", metaFilename);
    if (metaFilename !== "nil") {
        const url = "".concat(
            VarchiveServer,
            "/video/All/",
            metaFilename,
            "/details?isPluginEnvironment=true"
        );
        sidebar.loadFile(url);
    }
}

iina.event.on("iina.file-loaded", () => {});

iina.event.on("iina.varchive-connection-received", (data) => {
    console.log("@@@iina.varchive-connection-received");
    const message = JSON.parse(JSON.parse(data).message);
    loadSideBar(message.metaFilename);
});

iina.event.on("iina.varchive-sidebar-bookmark-show", () => {
    sidebar.show();
});

iina.event.on("iina.varchive-sidebar-preview-show", () => {
    sidebar.show();
});

// event.on("iina.window-loaded", () => {
//   sidebar.loadFile("dist/ui/sidebar/index.html");
// });

// sidebar.loadFile("dist/ui/sidebar/index.html");

// menu.addItem(
//     menu.item("Load Video Sidebar", () => {
//         sidebar.loadFile(
//             "http://localhost:5999/video/All/2024-12-02_03-14-33.240/details?isPluginEnvironment=true"
//         );
//     })
// );

menu.addItem(
    menu.item("Show Video Sidebar", () => {
        sidebar.show();
    })
);
