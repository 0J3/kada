const path = require('path');
const icon = path.resolve('icon', 'kadabig.ico');
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
		name: 'app',
	},
	electronInstallerDebian: {},
	electronInstallerRedhat: {},
	github_repository: {
		owner: '0J3',
		name: 'kada',
	},
	windowsStoreConfig: {
		packageName: '',
		name: 'app',
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
			config: {
				iconUrl: icon,
				setupIcon: icon,
				copyright: '',
			},
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
