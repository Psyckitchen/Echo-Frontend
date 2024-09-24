import Image from "next/image"

const TeamInfo = ({memberName, memberPhoto, memberRole, memberInfo}) => {
	return (
		<div className="flex flex-col justify-center">
			<Image
				src={memberPhoto}
				alt="member photo"
				width="1000"
				height="1000"/>
			<div className="mt-3">
				<p className="font-bold text-5xl">{memberName}</p>
				<p className="sm:text-base text-xl leading-none">{memberRole}</p>
				<p className="sm:text-base text-xl leading-none">{memberInfo}</p>
			</div>
		</div>

	)
}

export default TeamInfo