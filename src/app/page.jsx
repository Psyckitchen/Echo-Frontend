import Image from 'next/image'
import Page from '@components/Page';
import Spotlight from "@components/Spotlight";
import TeamInfo from "@components/TeamInfo";
import ContactLink from "@components/ContactLink";
import t from "@translations/text.json"

export default function Home() {
  // TODO: chinese text
  return (
    <>
      <div className="flex flex-col flex-wrap">

        {/* Intro */}
        <Page className="page-visible flex-col flex-wrap">
          <h1 className="head-text text-center sm:mb-10 mb-5 text-pink">
            {t.intro.title}
          </h1>
          <h3 className="head3-text text-center mx-5 text-pink">
            {t.intro.description}
          </h3>
        </Page>

        {/* Feature */}
        <Page className="flex-row bg-pink">
          <div className="w-full feature-desc flex flex-col mt-14 ml-10 text-darkblue">
            <h2 className="head2-text text-xl md:mb-10 mb-5">
              {t.feature.title}
            </h2>
            <p className="feature-text">
              {t.feature.description}
            </p>
          </div>

          <Image 
            className="feature-pic" 
            alt='feature pic'
            src="/images/test.jpg"
            width="1000"
            height="1000"/>

        </Page>

        {/* Video */}
        <Page className="text-white">
          <h2 className="head2-text text-center text-darkblue">Video</h2>
          <div className="video-placeholder bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <p className="text-darkblue">Video content goes here</p>
          </div>
        </Page>

        {/* Spotlight */}
        <Page className="flex-row flex-wrap content-center">
          <div className="spotlight flex flex-col justify-center">
            <h2 className="spotlight-head text-center text-pink">
              {t.spotlight.title}
            </h2>
          </div>
          <Spotlight spotlightHead={t.spotlight.point1.title} spotlightText={t.spotlight.point1.description}/>
          <Spotlight spotlightHead={t.spotlight.point2.title} spotlightText={t.spotlight.point2.description}/>
          <Spotlight spotlightHead={t.spotlight.point3.title} spotlightText={t.spotlight.point3.description}/>
          <Spotlight spotlightHead={t.spotlight.point4.title} spotlightText={t.spotlight.point4.description}/>
          <Spotlight spotlightHead={t.spotlight.point5.title} spotlightText={t.spotlight.point5.description}/>
          <Spotlight spotlightHead={t.spotlight.point6.title} spotlightText={t.spotlight.point6.description}/>
          <Spotlight spotlightHead={t.spotlight.point7.title} spotlightText={t.spotlight.point7.description}/>
        </Page>

        {/* Meet Members */}
        <Page className="flex-col content-center">
          <h2 className="head2-text text-center mb-16 text-pink">
            {t.meetMembers.title}
          </h2>
          <div className='flex flex-row gap-8 md:mx-48 mx-12 text-pink'>
          {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 md:mx-48 mx-12 text-pink"> */}
            <TeamInfo memberName={t.meetMembers.person1.name} memberRole={t.meetMembers.person1.role} memberInfo={t.meetMembers.person1.info} memberPhoto={t.meetMembers.person1.image} memberLinkedin={t.meetMembers.person1.linkedin} />
            <TeamInfo memberName={t.meetMembers.person2.name} memberRole={t.meetMembers.person2.role} memberInfo={t.meetMembers.person2.info} memberPhoto={t.meetMembers.person2.image} memberLinkedin={t.meetMembers.person2.linkedin} />
            <TeamInfo memberName={t.meetMembers.person3.name} memberRole={t.meetMembers.person3.role} memberInfo={t.meetMembers.person3.info} memberPhoto={t.meetMembers.person3.image} memberLinkedin={t.meetMembers.person3.linkedin} />
          </div>
        </Page>

        <Page className="p-6">
          <h2 className="head2-text text-center text-darkblue">Echo API</h2>
          <div className="api-placeholder bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <p className="text-darkblue">API content goes here</p>
          </div>
        </Page>

        {/* Contact */}
        <Page className="flex-col bg-peach p-6">
          <h2 className="head2-text text-center mb-16 text-pink">{t.contact.title}</h2>
          <div className="flex flex-row justify-between md:mx-48 mx-12">
            <ContactLink contactInfo={"info1"} />
            <ContactLink contactInfo={"info2"} />
            <ContactLink contactInfo={"info3"} />
            <ContactLink contactInfo={"info4"} />
          </div>
        </Page>
      </div>
    </>
  );
}
