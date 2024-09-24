"use client"

import Image from "next/image"
import Link from "next/link"

const TeamInfo = ({memberName, memberPhoto, memberRole, memberInfo, memberLinkedin}) => {
	return (
		<div>
			<Image
				src={memberPhoto}
				alt="member photo"
				width="1000"
				height="1000"/>
			<Link href={memberLinkedin}>
				<p className="font-bold">{memberName}</p>
				<p className="sm:text-base text-sm leading-none">{memberRole}</p>
				<p className="sm:text-base text-sm leading-none">{memberInfo}</p>
			</Link>
		</div>

	)
}

export default TeamInfo