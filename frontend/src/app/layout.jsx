import { Geist, Geist_Mono, Montserrat_Alternates } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Parashar Das",
  description: "A passionate MERN Stack Developer from Bangladesh!",
};

const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'], // customize as needed
  display: 'swap',
});


export default function RootLayout({ children }) {
  const fonts = `${geistSans.variable} ${geistMono.variable} ${montserratAlt.className}`;

  return (
    <html lang="en" className="light" data-arp='aa'>
      <body className={`${fonts} antialiased flex`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
