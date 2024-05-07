
import "../../globals.css";
export const metadata = {
  title: 'Register',
  description: 'Register page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
