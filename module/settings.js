Hooks.once("init", () => {
    // updateMenu.js
    game.settings.registerMenu("dnd5e-animations", "autorecUpdate", {
        name: game.i18n.localize("dnd5e-animations.settings.autorecUpdate.name"),
        label: game.i18n.localize("dnd5e-animations.settings.autorecUpdate.label"),
        icon: "fa-solid fa-wrench",
        type: autorecUpdateFormApplication,
        restricted: true
    });

    //#region Settings
    game.settings.register("dnd5e-animations", "autoUpdate", {
        scope: "world",
        config: true,
        name: game.i18n.localize("dnd5e-animations.settings.autoUpdate.name"),
        hint: game.i18n.localize("dnd5e-animations.settings.autoUpdate.hint"),
        type: Boolean,
        default: true
    });
    game.settings.register("dnd5e-animations", "debug", {
        scope: "client",
        config: true,
        name: game.i18n.localize("dnd5e-animations.settings.debug.name"),
        hint: game.i18n.localize("dnd5e-animations.settings.debug.hint"),
        type: Boolean,
        default: false
    });
    // #endregion

    //#region Data Storage
    game.settings.register("dnd5e-animations", "version-previous", {
        scope: "world",
        type: String,
        default: "0"
    });
    game.settings.register("dnd5e-animations", "blacklist", {
        scope: "world",
        type: Object,
        default: {
            menu: [],
            entries: [],
        }
    });
    //#endregion
});