import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";


export default function Cabecalho(){
    return (
        <div className="bg-neutral-900 py-1">
            <div className="container mx-auto flex">
                <div className="space-x-4 basis-1/3 fullhd:text-center">
                    <a className="*:inline *:hover:fill-purple-500" href="https://www.instagram.com/maracatu.leao.das.cordilheiras/" target="_blank"><FaInstagram color="gray"/></a>
                    <a className="*:inline *:hover:fill-red-500" href="https://www.youtube.com/@LeaodasCordilheiras" target="_blank"><FaYoutube color="gray"/></a>
                </div>
                <div className="basis-1/3">Teste</div>
                <div className="space-x-4 basis-1/3 text-right fullhd:text-center">
                    <a className="*:inline *:hover:fill-slate-100" href="tel:84991095932" target="_blank"><BsTelephone color="gray"/></a>
                    <a className="*:inline *:hover:fill-green-500" href="https://wa.me/+5584991095932" target="_blank"><FaWhatsapp color="gray"/></a>
                    <a className="*:inline *:hover:fill-slate-100" href="mailto:leao.das.cordilheiras.aracoiaba@gmail.com" target="_blank"><FaRegEnvelope color="gray"/></a>            
                </div>
            </div>
        </div>
    )
}