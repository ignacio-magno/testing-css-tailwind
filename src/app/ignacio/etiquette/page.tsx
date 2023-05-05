import Image from "next/image"
import Tag from "../../../../public/etiqueta.jpg"
import styles from "./styles.module.css"

export default function Page() {
    return <>
        <div className={"relative"}>
            <div className={`absolute top-0 left-0 overflow-hidden ${styles.animation}`} style={{backgroundImage: `url(${Tag.src})`}}>
            </div>
        </div>

        <div className={""}>
             <div className={""}>
                 hola
             </div>
        </div>
    </>
}