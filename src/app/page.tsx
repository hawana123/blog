export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/blog/en" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('/blog/en');`,
          }}
        />
      </body>
    </html>
  );
}
