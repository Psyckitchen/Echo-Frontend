import '@styles/globals.css'
import Nav from "@components/Nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body bgcolor="#112D4E">
        <main>
          <Nav/>
          { children }
        </main>
      </body>
    
    </html>
  );
}
