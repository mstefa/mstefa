export const metadata = {
  title: "Matías Stefanutti | Senior Software Engineer — AI Agents & Process Automation",
  description:
    "Matías Stefanutti — Senior Software Engineer specializing in scalable backend architectures, MCP servers, AI agents, and process automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
