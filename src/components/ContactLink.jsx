import Image from "next/image"
const ContactLink = ( {contactInfo}) => {
	return (
		<>
			<Image 
				className="contact" 
				src="/images/test.jpg"
				width="1000"
				height="1000"/>
		</>
	)
}

export default ContactLink