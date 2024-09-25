import Page from "@components/Page";
import ContactLink from "@components/ContactLink";
import t from "@translations/text.json";

export default function ContactSection() {
	return (
		<Page className="flex-col bg-peach p-6">
			<h2 className="head2-text text-center mb-16 text-pink">
				{t.contact.title}
			</h2>
			<div className="flex flex-row justify-between md:mx-48 mx-12">
				<ContactLink contactInfo={"info1"} />
				<ContactLink contactInfo={"info2"} />
				<ContactLink contactInfo={"info3"} />
				<ContactLink contactInfo={"info4"} />
			</div>
		</Page>
	);
}
