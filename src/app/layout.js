import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { Provider } from "../../components/provider";

export const metadata = {
  title: "API X API",
  description: "Collaboration of two great APIs",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="relative">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
