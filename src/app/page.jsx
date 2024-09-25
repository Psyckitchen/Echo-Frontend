import IntroSection from "@components/home/IntroSection";
import FeatureSection from "@components/home/FeatureSection";
import VideoSection from "@components/home/VideoSection";
import SpotlightSection from "@components/home/SpotlightSection";
import TeamSection from "@components/home/TeamSection";
import EchoAPISection from "@components/home/EchoAPISection";
import ContactSection from "@components/home/ContactSection";

export default function Home() {
	return (
		<>
			<div className="flex flex-col flex-wrap">
				<IntroSection />
				<FeatureSection />
				<VideoSection />
				<SpotlightSection />
				<TeamSection />
				<EchoAPISection />
				<ContactSection />
			</div>
		</>
	);
}
