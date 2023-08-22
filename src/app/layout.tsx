export const metadata = {
  title: 'mstefa',
  description: 'Matias Stefanutti personal web site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
