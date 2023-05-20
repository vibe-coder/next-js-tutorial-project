import "@styles/globals.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Gradient background for Layout page */}
          <div className="main">
            <div className="gradient" />
          </div>
    
          {/*Main part of our application */}
          <main className="app">
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout