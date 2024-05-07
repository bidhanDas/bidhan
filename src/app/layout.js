import Navbar from '@/components/Navbar'
import './globals.css'

export async function generateMetadata(){
  return{
      icons: {
        icon:'/favicon.ico?v=4',
      }
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>Bidhan</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>

      <body>
        <Navbar></Navbar>
        {children}
      </body>

    </html>
  )
}
