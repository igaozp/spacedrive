import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { NavBar } from './NavBar';

import '@sd/ui/style/style.scss';
import '~/styles/prism.css';
import '~/styles/style.scss';

import clsx from 'clsx';
import PlausibleProvider from 'next-plausible';

import { interFont, plexSansFont } from './fonts';
import { Providers } from './Providers';

export const metadata: Metadata = {
	metadataBase: new URL('https://spacedrive.com'),
	robots: 'index, follow',
	description:
		'Combine your drives and clouds into one database that you can organize and explore from any device. Designed for creators, hoarders and the painfully disorganized.',
	openGraph: {
		images: 'https://spacedrive.com/logo.png'
	},
	keywords:
		'files,file manager,spacedrive,file explorer,vdfs,distributed filesystem,cas,content addressable storage,virtual filesystem,photos app, video organizer,video encoder,tags,tag based filesystem',
	authors: { name: 'Spacedrive Technology Inc.', url: 'https://spacedrive.com' }
};

export const viewport: Viewport = {
	themeColor: [
		// embed color on discord, for instance
		{ color: '#E751ED', media: 'not screen' },
		// background color in Safari
		{ color: '#0E0E12', media: 'screen' }
	]
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html
			lang="en"
			className={clsx('scroll-smooth text-white', plexSansFont.variable, interFont.variable)}
		>
			<head>
				<PlausibleProvider
					domain="spacedrive.com"
					customDomain="spacedrive.com"
					trackOutboundLinks
					taggedEvents
				/>
			</head>
			<body className="font-plex">
				<div className="absolute top-0 z-[100] w-screen select-none bg-transparent pt-1 text-center italic text-white/30">
					The content of this site is not final and should not be considered official
					marketing or advertising from Spacedrive Technology Inc.
				</div>
				<Providers>
					<div className="overflow-hidden bg-[#0E0E12]">
						<NavBar />
						<main className="z-10 m-auto max-w-[100rem]">{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
