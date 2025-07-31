const dnd5eAnimations = {}
const moduleID = "dnd5e-animations"

//#region Hooks
dnd5eAnimations.hooks = {}

dnd5eAnimations.hooks.ready = Hooks.once("ready", async () => {
	console.log("5e Animations v" + game.modules.get(moduleID).version + " loaded.");

	const proceed = await checkForModulesAndWarn()
	if (!proceed) return;

	if (game.settings.get(moduleID, "version-previous") !== game.modules.get(moduleID).version) {
		ui.notifications.info(dnd5eAnimations.localize("dnd5e-animations.notifications.update", { version: game.modules.get(moduleID).version }))
		game.settings.set(moduleID, "version-previous", game.modules.get(moduleID).version)
		if (game.user.isGM && game.settings.get(moduleID, "autoUpdate")) new autorecUpdateFormApplication().render(true)
	}

	// GM-Only stuff.
	if (!game.user.isGM) return;
});

// Create a hook for metadata modification menu.
dnd5eAnimations.hooks.AutomatedAnimations = {}
dnd5eAnimations.hooks.AutomatedAnimations.metaData = Hooks.on("AutomatedAnimations.metaData", async (data) => {
	if (game.settings.get(moduleID, "debug")) {
		dnd5eAnimations.debug("AutomatedAnimations.metaData hook", data);
		let metaData = data.metaData;
		const fields = foundry.applications.fields;

		const nameInput = fields.createTextInput({
			label: `name${metaData.name ? "" : " (auto)"}`,
			name: "name",
			value: metaData.name || "5e Animations"
		});
		const nameGroup = fields.createFormGroup({
			input: nameInput,
			label: `Module Name ${metaData.name ? "" : " (auto)"}`
		});

		const modVersionInput = fields.createTextInput({
			name: "modVersion",
			label: `moduleVersion${metaData.moduleVersion ? "" : " (auto)"}`,
			value: metaData.moduleVersion || game.modules.get(moduleID).version
		});
		const modVersionGroup = fields.createFormGroup({
			input: modVersionInput,
			label: `Module Version${metaData.moduleVersion ? "" : " (auto)"}`,
		});

		const versionInput = fields.createTextInput({
			name: "version",
			label: `Timestamp Version ${metaData.version ? "" : " (auto)"}`,
			value: metaData.version || Number(Date.now())
		});
		const versionGroup = fields.createFormGroup({
			input: versionInput,
			label: `version${metaData.version ? "" : " (auto)"}`,
		});

		await foundry.applications.api.DialogV2.wait({
			window: {
				title: `DEBUG | Add Metadata to ${data.label}.`,
				width: 600
			},
			content: `${nameGroup.outerHTML} ${modVersionGroup.outerHTML} ${versionGroup.outerHTML}`,
			modal: true,
			rejectClose: false,
			buttons: [
				{
					label: 'Apply',
					action: 'apply',
					callback: async (event, button, dialog) => {
						const options = new FormDataExtended(button.form).object;

						let settings = await game.settings.get("autoanimations", `aaAutorec-${data.menu}`);
						let entry = settings.findIndex(obj => obj.label === data.label);
						settings[entry].metaData.name = options.name ?? settings[entry].metaData.name;
						settings[entry].metaData.moduleVersion = options.modVersion ?? settings[entry].metaData.moduleVersion;
						settings[entry].metaData.version = options.version ?? settings[entry].metaData.version;
						await AutomatedAnimations.AutorecManager.overwriteMenus(JSON.stringify({ version: await game.settings.get('autoanimations', 'aaAutorec').version, [data.menu]: settings }), { [data.menu]: true });
					}
				},
				{
					label: 'Update',
					action: 'update',
					callback: async (event, button, dialog) => {
						const options = new FormDataExtended(button.form).object;

						let settings = await game.settings.get("autoanimations", `aaAutorec-${data.menu}`);
						let entry = settings.findIndex(obj => obj.label === data.label);
						settings[entry].metaData.name = "5e Animations";
						settings[entry].metaData.moduleVersion = game.modules.get(moduleID).version;
						settings[entry].metaData.version = (options.version ?? settings[entry].metaData.version) + 1;
						await AutomatedAnimations.AutorecManager.overwriteMenus(JSON.stringify({ version: await game.settings.get('autoanimations', 'aaAutorec').version, [data.menu]: settings }), { [data.menu]: true });
					}
				},
				{
					label: 'Delete MetaData',
					action: 'delete',
					callback: async (event, button, dialog) => {
						let settings = await game.settings.get("autoanimations", `aaAutorec-${data.menu}`);
						let entry = settings.findIndex(obj => obj.label === data.label);
						settings[entry].metaData = {};
						await AutomatedAnimations.AutorecManager.overwriteMenus(JSON.stringify({ version: await game.settings.get('autoanimations', 'aaAutorec').version, [data.menu]: settings }), { [data.menu]: true });
						ui.notifications.warn(`Deleted metadata from "${data.label}"!`)
					}
				}
			]
		})
	}
});
//#endregion

dnd5eAnimations.debug = function debug(msg, args) {
	[msg, ...args] = arguments
	if (game.settings.get(moduleID, "debug")) console.log(`DEBUG | 5e Animations | ${msg}`, args);
}

dnd5eAnimations.localize = function localize(string = String, format = Object) {
	if (!string.includes("dnd5e-animations.")) string = "dnd5e-animations." + string;
	if (Object.keys(format).length > 0) {
		return game.i18n.format(string, format);
	} else {
		return game.i18n.localize(string);
	}
}

self.dnd5eAnimations = dnd5eAnimations

async function checkForModulesAndWarn() {
	if (game.settings.get("dnd5e-animations", "show-popup") === false) return true;
	const mods = {
		jb2a: game.modules.get("jb2a_patreon")?.active,
		psfx: game.modules.get("psfx")?.active,
	}

	if (mods.jb2a && mods.psfx) return true;

	// I am sorry for anyone looking at this but this is so trivial I can't be arsed to make this prettier.

	let content = "<p style='text-align:center'>Uh oh. D&D5e Animations requires both the JB2A and PSFX modules to work, and it looks like you are missing one of them. Please make sure you have both of them installed <b>and</b> enabled!</p>"

	content += `<div style="display: flex;">`
	content += `<div style="position:relative; max-width:50%;">
		<img style="border:none; display:block; width:100%; ${mods.jb2a ? "filter:grayscale(75%) blur(2px);" : ""}" src="modules/dnd5e-animations/assets/graphics/logos/jb2a.webp">
		<div style='text-align:center; padding-top: 0.25rem;'><a href="https://www.patreon.com/jb2a">JB2A</a></div>
		${mods.jb2a
			? `<i class="fas fa-check" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(5); color: white; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"></i>`
			: `<i class="fas fa-exclamation" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(5); color: white; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"></i>`}
		</div>`
	content += `<div style="position:relative; max-width:50%;">
		<img style="border:none; display:block; width:100%; ${mods.psfx ? "filter:grayscale(75%) blur(2px);" : ""}" src="modules/dnd5e-animations/assets/graphics/logos/psfx.webp">
		<div style='text-align:center; padding-top: 0.25rem;'><a href="https://www.patreon.com/PeriSFX">PSFX</a></div>
		${mods.psfx
			? `<i class="fas fa-check" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(5); color: white; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"></i>`
			: `<i class="fas fa-exclamation" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(5); color: white; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; animation: bounce-dnd5e-animations 1s infinite;"></i>`}
		</div>`
	content += `</div>`

	content += "<i style='text-align:center; font-size:0.75rem;'>Please do note that the free versions of above modules only offer limited functionality. If you accept that liability, feel free to press the \"Don't show this again\" button.</i>"

	if (!mods.jb2a || !mods.psfx) {
		const prompt = await foundry.applications.api.DialogV2.prompt({
			window: { title: "D&D5e Animations - Warning" },
			position: { width: 600, top: window.innerHeight / 4 },
			content,
			ok: { label: "I understand" },
			buttons: [
				{
					label: "Don't show this again",
					action: "dont",
				}
			],
			modal: true,
		})

		if (prompt === "dont") game.settings.set("dnd5e-animations", "show-popup", false)
		return prompt
	}

	return true;
}