import { FaDiscord } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa"

const Community = () => {
  return (
    <div className="Community-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="head1">KEEP IN TOUCH WITH</h3>
            <h1 className="head2">SOMNIUM COMMUNITY</h1>
            <h3 className="head1 pt-1">
              Share your thoughts with Us and the World
            </h3>
            <p className="p1">
              We are an open social world. Our community is the most important
              thing. We are active and happy to answer every question through
              our live channels or through our social channels.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-11 text-white text-center">
              <FaDiscord
                size={45}
                className="border border-5 rounded-5 p-1 m-1"
              />
              <iframe
                src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
                width="1200"
                className="mt-3"
                height="400"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-white text-center my-5">
            <FaTwitter  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <iframe id="twitter-widget-0" className="mt-4" scrolling="no" frameBorder={0} allowTransparency="true" allowFullScreen="true"  style={{position: 'static', visibility: 'visible', width: '500px', height: '600px', display: 'block', flexGrow: 1}} title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=600px&origin=https%3A%2F%2Fsomniumspace.com%2F&sessionId=fb1f08b3d6d2f6f36f01df9586cc4799372f0447&showHeader=true&showReplies=false&theme=dark&transparent=false&widgetsVersion=a3525f077c700%3A1667415560940" ></iframe>
            </div>
            <div className="col-lg-5 text-white text-center my-5">
            <FaFacebookF  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <iframe className="mt-4 mb-5" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="500" height="600" scrolling="no" frameborder="0" allow="encrypted-media"></iframe> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
