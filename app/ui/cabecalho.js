import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";


export default function Cabecalho(){
    return (
        <div className="bg-neutral-900 py-1">
            <div className="container flex mx-auto h-16 fullhd:h-auto">
                <div className="space-x-4 basis-1/2 fullhd:basis-1/3 text-left ml-4 fullhd:text-center fullhd:m-0">
                    <a className="*:inline *:hover:fill-purple-500" href="https://www.instagram.com/maracatu.leao.das.cordilheiras/" target="_blank">
                        <FaInstagram className="fullhd:hidden my-4" size={32} color="gray"/>
                        <FaInstagram className="invisible fullhd:visible" color="gray"/>
                    </a>
                    <a className="*:inline *:hover:fill-red-500" href="https://www.youtube.com/@LeaodasCordilheiras" target="_blank">
                        <FaYoutube className="fullhd:hidden my-4" size={32} color="gray"/>
                        <FaYoutube className="invisible fullhd:visible" color="gray"/>
                    </a>
                </div>
                <div className="basis-1/2 fullhd:basis-1/3 hidden fullhd:inline text-slate-500 text-center"></div>
                <div className="space-x-4 basis-1/2 fullhd:basis-1/3 text-right">
                    <a className="*:inline *:hover:fill-slate-100" href="tel:84991095932" target="_blank">
                        <BsTelephone className="fullhd:hidden my-4" size={32} color="gray"/>
                        <BsTelephone className="invisible fullhd:visible" color="gray"/>
                    </a>
                    <a className="*:inline *:hover:fill-green-500" href="https://wa.me/+5584991095932" target="_blank">
                        <FaWhatsapp className="fullhd:hidden" size={32} color="gray"/>
                        <FaWhatsapp className="invisible fullhd:visible" color="gray"/>
                    </a>
                    <a className="*:inline *:hover:fill-slate-100" href="mailto:leao.das.cordilheiras.aracoiaba@gmail.com" target="_blank">
                        <FaRegEnvelope className="fullhd:hidden" size={32} color="gray"/>
                        <FaRegEnvelope className="invisible fullhd:visible" color="gray"/>
                    </a>            
                </div>
            </div>
        </div>
    )
}