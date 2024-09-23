import Image from "next/image"

const TeamInfo = ({memberName, memberPhoto, memberInfo}) => {
	return (
		<div>
			<Image
				src="/images/test.jpg"
				width="1000"
				height="1000"/>
			<div>
				<p className="font-bold">{memberName}</p>
				<p className="sm:text-base text-sm leading-none">{memberInfo}</p>
			</div>
		</div>

	)
}

export default TeamInfo