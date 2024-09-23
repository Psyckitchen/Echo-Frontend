import Image from "next/image"

const TeamInfo = ({memberName, memberPhoto, memberRole, memberInfo}) => {
	return (
		<div>
			<Image
				src="/images/test.jpg"
				alt="member photo"
				width="1000"
				height="1000"/>
			<div className="mt-3">
				<p className="font-bold">{memberName}</p>
				<p className="sm:text-base text-sm leading-none">{memberRole}</p>
				<p className="sm:text-base text-sm leading-none">{memberInfo}</p>
			</div>
		</div>

	)
}

export default TeamInfo