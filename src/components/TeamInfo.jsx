"use client";

import Image from "next/image";
import Link from "next/link";

const TeamInfo = ({ Profile }) => {
	return (
		<div>
			<Image
				src={Profile.image}
				alt="member photo"
				width="1000"
				height="1000"
				className="rounded-3xl"
			/>
			<Link href={Profile.linkedin}>
				<p className="font-bold">{Profile.name}</p>
				<p className="text-xl leading-none">{Profile.role}</p>
				<p className="text-xl leading-none">{Profile.info}</p>
			</Link>
		</div>
	);
};

export default TeamInfo;
