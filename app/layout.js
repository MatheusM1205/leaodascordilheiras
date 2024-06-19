import "./global.css"

export const metadata = {
  title: 'Maracatu Leão das Cordilheiras'
}

export default function RootLayout({ children }) {
    return (
      <html lang="pt_BR">
        <body className="bg-cover h-screen">
        <div className="fullhd:container fullhd:mx-auto">
          {/* <Cabecalho /> */}
          {children}
          {/* <Rodape /> */}
        </div>
        </body>
      </html>
    )
  }