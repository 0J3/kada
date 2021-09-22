const path = require('path');
const icon = path.resolve('icon', 'kadabig.ico');
const squirrelConfig = {
	iconUrl: icon,
	setupIcon: icon,
	copyright: 'Copyright (c) 2021 0J3. All Rights Reserved.',
};
module.exports = {
	make_targets: {
		win32: ['squirrel'],
		darwin: ['zip'],
		linux: ['deb', 'rpm'],
	},
	electronPackagerConfig: {
		packageManager: 'yarn',
		icon,
	},
	electronWinstallerConfig: {
		name: 'kada',
		...squirrelConfig,
	},
	electronInstallerDebian: {},
	electronInstallerRedhat: {},
	github_repository: {
		owner: '0J3',
		name: 'kada',
	},
	windowsStoreConfig: {
		packageName: 'kada',
		name: 'kada',
	},
	makers: [
		{
			name: '@electron-forge/maker-zip',
			platforms: ['win32', 'linux'],
			config: {
				// Config here
			},
		},
		{
			name: '@electron-forge/maker-squirrel',
			config: squirrelConfig,
		},
		{
			name: '@electron-forge/maker-deb',
			config: {
				options: {
					maintainer: '0J3',
					homepage: 'https://nora.lgbt',
				},
			},
		},
	],
};
