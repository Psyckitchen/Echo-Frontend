import Page from "@components/Page";
import Spotlight from "@components/Spotlight";
import t from "@translations/text.json";

export default function SpotlightSection() {
	return (
		<Page className="flex-row flex-wrap content-center">
			<div className="spotlight flex flex-col justify-center">
				<h2 className="spotlight-head text-center text-pink">
					{t.spotlight.title}
				</h2>
			</div>
			{Object.entries(t.spotlight).map(([key, value]) => {
				if (key !== "title") {
					return (
						<Spotlight
							key={key}
							spotlightHead={value.title}
							spotlightText={value.description}
						/>
					);
				}
			})}
		</Page>
	);
}
