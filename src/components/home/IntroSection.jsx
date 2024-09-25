import Page from "@components/Page";
import t from "@translations/text.json";

export default function IntroSection() {
	return (
		<Page className="page-visible flex-col flex-wrap">
			<h1 className="head-text text-center sm:mb-10 mb-5 text-pink">
				{t.intro.title}
			</h1>
			<h3 className="head3-text text-center mx-5 text-pink">
				{t.intro.description}
			</h3>
		</Page>
	);
}
