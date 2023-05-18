import "@styles/globals.css"

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>

        {/* Created a Gradient background for Layout page */}

        <div className="main">
          <div className="gradient" />
        </div>

        {/* The Actual main part of our application */}
        
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout