import Script from "next/script";

export default function GoogleTagManager({ id }: { id: string }) {
  return (
    <>
      <Script
        async
        src={`src="https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${id}');
		`,
        }}
      />
    </>
  );
}
