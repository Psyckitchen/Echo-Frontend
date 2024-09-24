"use client"

import Image from "next/image"
import Link from "next/link"

const TeamInfo = ({memberName, memberPhoto, memberRole, memberInfo, memberLinkedin}) => {
	return (
		<div className="flex flex-col justify-center ">
			<Image
				src={memberPhoto}
				alt="member photo"
				width="1000"
				height="1000"
				className="rounded-lg"/>
			<Link className="mt-3" href={memberLinkedin} target="_blank">
				<p className="font-bold text-5xl">{memberName}</p>
				<p className="sm:text-base text-xl leading-none">{memberRole}</p>
				<p className="sm:text-base text-xl leading-none">{memberInfo}</p>
			</Link>
		</div>

	)
}

export default TeamInfo