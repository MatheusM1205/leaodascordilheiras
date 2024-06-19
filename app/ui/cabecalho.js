import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


export default function Cabecalho(){
    return (
        <div className="bg-neutral-900 py-1">
            <div className="container mx-auto flex">
                <div className="*:inline space-x-4 basis-1/3">
                    <FaFacebook color="gray"/>
                    <FaInstagram color="gray"/>
                    <FaYoutube color="gray"/>
                </div>
                <div className="basis-1/3"></div>
                <div className="*:inline space-x-4 basis-1/3">
                    <FaWhatsapp color="gray"/>
                    <FaRegEnvelope color="gray"/>
                </div>
            </div>
        </div>
    )
}