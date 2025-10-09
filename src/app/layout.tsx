import "./globals.css";
import _ from "lodash";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import PrelineScriptWrapper from "../components/PrelineScriptWrapper";
import Footer from "../components/layout/footer";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import I18nProvider from "../components/I18nProvider";

// Make lodash available globally
if (typeof window !== "undefined") {
  window._ = _;
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>
        <main className="pt-0">
          <ErrorBoundary>
            <I18nProvider>
              <Header />
              {children}
              <Footer />
            </I18nProvider>
          </ErrorBoundary>
        </main>
        <PrelineScriptWrapper />
      </body>
    </html>
  );
};