import Page from "@components/Page";
import Image from "next/image";
import t from "@translations/text.json";

export default function FeatureSection() {
	return (
		<Page className="flex-row bg-pink">
			<div className="w-full feature-desc flex flex-col mt-14 ml-10 text-darkblue">
				<h2 className="head2-text text-xl md:mb-10 mb-5">{t.feature.title}</h2>
				<p className="feature-text">{t.feature.description}</p>
			</div>
			<Image
				className="feature-pic"
				alt="feature pic"
				src="/images/test.jpg"
				width="1000"
				height="1000"
			/>
		</Page>
	);
}
