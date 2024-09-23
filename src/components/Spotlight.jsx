import Image from "next/image"

const Spotlight = ( {spotlightHead, spotlightText, imgSrc} ) => {
	return (
		<>
			<div className="spotlight bg-pink">
				<div className="spotlight-textbox">
					<h3 className="spotlight-head text-darkblue">
						{spotlightHead}
					</h3>
					<p className="spotlight-text text-darkblue">
						{spotlightText}
					</p>
				</div>
				<Image 
					className="spotlight-img"
					alt="spotlight img"
					src="/images/test.jpg"
					width="1000"
					height="1000"/>
			</div>
		</>
	)
}

export default Spotlight