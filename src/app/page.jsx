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
          <h1 className="head-text text-center sm:mb-10 mb-5 text-white">
            {t.intro.title}
          </h1>
          <h3 className="head3-text text-center mx-5 text-white">
            {t.intro.description}
          </h3>
        </Page>
        
        {/* Feature */}
        {/* TODO: debug safari */}
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

        {/* TODO: Video */}
        <Page className="text-white">
          video
        </Page>

        {/* Spotlight */}
        <Page className="flex-row flex-wrap content-center">
          <div className="spotlight flex flex-col justify-center">
            <h2 className="spotlight-head text-center text-pink">
              {t.spotlight.title}
              </h2>
          </div>
          {/* TODO: phone adaptation */}
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
          <h1 className="head2-text text-center mb-16 text-pink">
            {t.meetMembers.title}
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 md:mx-48 mx-12 text-pink">
            <TeamInfo memberName={t.meetMembers.person1.name} memberRole={t.meetMembers.person1.role} memberInfo={t.meetMembers.person1.info} />
            <TeamInfo memberName={t.meetMembers.person2.name} memberRole={t.meetMembers.person2.role} memberInfo={t.meetMembers.person2.info} />
            <TeamInfo memberName={t.meetMembers.person3.name} memberRole={t.meetMembers.person3.role} memberInfo={t.meetMembers.person3.info} />
            <TeamInfo memberName={t.meetMembers.person4.name} memberRole={t.meetMembers.person4.role} memberInfo={t.meetMembers.person4.info} />
          </div>
        </Page>

        <Page>
          echo api
        </Page>

        {/* Contact */}
        <Page className="flex-col bg-peach">
          <h1 className="head2-text text-center mb-16 text-white">{t.contact.title}</h1>
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
