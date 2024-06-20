export default function Rodape(){
    return(
        <div className="flex bg-neutral-900 p-1 space-x-4">
            <div className="basis-1/4 *:text-slate-500 *:text-center pt-6">
                <img src="logo.jpeg" className="flex w-24 mx-auto border-4 rounded-full"/>
                <header>Maracatu Leão das Cordilheiras</header>
                <p>CNPJ: 69.927.382/0001/08</p>
            </div>
            <div className="basis-1/4">
                <header className="text-slate-500 text-center">Diretoria</header>
                <div className="p-1 rounded flex space-x-2 min-w-64">
                    <img src="user.png" className="flex w-16 rounded-full"></img>
                    <div className="flex-1 my-auto">
                        <span className="text-slate-100">Severino Roque Batista<br/></span>
                        <span className="text-slate-500">Presidente</span>
                    </div>
                </div>
                <div className="p-1 rounded flex space-x-2 min-w-64">
                    <div className="flex-1 my-auto">
                        <span className="text-slate-100">Marcos Antônio de Souza<br/></span>
                        <span className="text-slate-500">Secretário</span>
                    </div>
                    <img src="user.png" className="flex w-16 rounded-full"></img>
                </div>
                <div className="p-1 rounded flex space-x-2 min-w-64">
                    <img src="user.png" className="flex w-16 rounded-full"></img>
                    <div className="flex-1 my-auto">
                        <span className="text-slate-100">Elenilson Roque Batista<br/></span>
                        <span className="text-slate-500">Tesoureiro</span>
                    </div>
                </div>
            </div>
            <div className="basis-1/4 text-slate-500">
                <header className="text-center">Programação</header>
                <ul>
                    <li>DD/MM - Cidade</li>
                    <li>DD/MM - Cidade</li>
                    <li>DD/MM - Cidade</li>
                </ul>
            </div>
            <div className="basis-1/4 *:text-slate-500 *:text-center">
                <header>Doações</header>
                <img src="logo.jpeg" className="flex w-32 mx-auto border-4 rounded"/>
                <p className="text-xs">69.927.382/0001-08</p>
                <p className="text-xs">CNPJ</p>
            </div>
        </div>
    )
} 