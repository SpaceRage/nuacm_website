import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  icons: {
    icon:"/favicon/favicon.ico", // Path to your favicon in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
