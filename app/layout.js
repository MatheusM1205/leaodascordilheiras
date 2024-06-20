import "./global.css"
import Cabecalho from "./ui/cabecalho"
import Hero from "./ui/hero"
import Rodape from "./ui/rodape"

export const metadata = {
  title: 'Maracatu Leão das Cordilheiras'
}

export default function RootLayout({ children }) {
    return (
      <html lang="pt_BR">
        <body className="bg-cover h-screen">
        <div>
          <Cabecalho />
          <Hero />
          {/* {children} */}
          <Rodape />
        </div>
        </body>
      </html>
    )
  }