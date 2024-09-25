import Page from "@components/Page";
import TeamInfo from "@components/TeamInfo";
import teamInfo from "@translations/teamInfo.json";

export default function TeamSection() {
	return (
		<Page className="flex-col content-center">
			<div>
				<h2 className="head2-text text-center my-8 text-pink">
					{teamInfo.title}
				</h2>
				<h3 className="text-center text-pink text-xl text-white my-8">
					{teamInfo.description}
				</h3>
				<br />
				<div className="flex flex-row gap-8 md:mx-48 mx-12 text-pink">
					{teamInfo.members.map((member) => (
						<TeamInfo key={member.name} Profile={member} />
					))}
				</div>
			</div>
		</Page>
	);
}
