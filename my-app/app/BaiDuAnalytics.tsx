import Script from "next/script";
export default function Page() {
  return (
    <>
      {process.env.NEXT_PUBLIC_AnalysisBaidu ? (
        <Script
          id="baidu-tongji"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2c3515f37f89ea315a8682f6277b6d1c";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();       
        `,
          }}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}
