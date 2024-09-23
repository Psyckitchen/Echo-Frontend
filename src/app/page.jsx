import Image from 'next/image'
import Page from '@components/Page';
import Spotlight from "@components/Spotlight";
import TeamInfo from "@components/TeamInfo";
import ContactLink from "@components/ContactLink";


export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-wrap">

        {/* Intro */}
        <Page className="page-visible flex-col flex-wrap bg-darkblue">
          <h1 className="head-text text-center sm:mb-10 mb-5 text-white">
            Echo
          </h1>
          <h3 className="head3-text text-center mx-5 text-white">
            We echo back your voice 
          </h3>
        </Page>
        
        {/* Feature */}
        {/* TODO: debug safari */}
        <Page className="flex-row bg-pink">
          <div className="w-full feature-desc flex flex-col mt-14 ml-10 text-darkblue">
            <h2 className="head2-text text-xl md:mb-10 mb-5">
              Features
            </h2>
            <p className="feature-text">
              Lorem ipsum dolor sit amet maiores quo perferendis eaque necessitatibus sit? Reiciendis iste blanditiis reprehenderit cum!
            </p>
          </div>

          <Image 
            className="feature-pic" 
            src="/images/test.jpg"
            width="1000"
            height="1000"/>
            
        </Page>

        {/* TODO: Video */}
        <Page className="bg-darkblue text-white">
          video
        </Page>

        {/* Spotlight */}
        <Page className="flex-row flex-wrap content-center bg-darkblue">
          <div className="spotlight flex flex-col justify-center">
            <h2 className="spotlight-head text-pink">
              Spotlights
              </h2>
          </div>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
          <Spotlight spotlightHead={"this is a title"} spotlightText={"asdfasdf asdbasdfa sd fasdffv hgdjs kvbhs kn"}/>
        </Page>

        {/* Team Info */}
        <Page className="flex-col content-center bg-darkblue">
          <h1 className="head2-text text-center mb-16 text-pink">
            Meet members
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 md:mx-48 mx-12 text-pink">
            <TeamInfo memberName={"sadf"} memberInfo={"this is a breif intro of yourselfasdf asdf asdf afsdasdf"} />
            <TeamInfo memberName={"sadf"} memberInfo={"this is a breif intro of yourselfasdf asdf asdf afsdasdf"} />
            <TeamInfo memberName={"sadf"} memberInfo={"this is a breif intro of yourselfasdf asdf asdf afsdasdf"} />
            <TeamInfo memberName={"sadf"} memberInfo={"this is a breif intro of yourselfasdf asdf asdf afsdasdf"} />
          </div>
        </Page>

        {/* Contact Link */}
        <Page className="page-visible flex-col bg-peach">
          <h1 className="head2-text text-center mb-16 text-white">Contact</h1>
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
