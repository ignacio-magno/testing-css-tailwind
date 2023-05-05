import Image from "next/image";
import Logo from "../../../public/vicio_logo.png"
import styles from "./layout.module.css"

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return <>
        <div className={"h-24 flex px-7 justify-between"}>
            <div className={"my-auto"}>
                <Image src={Logo} alt={"Vicio Logo"} width={100} height={100} priority/>
            </div>

            <div className={"max-w-[320px] my-auto flex gap-x-2"}>
                <p className={"text-[11px] font-bold my-auto"}>THE HOTTEST BURGER OF TODAY IS BBQ BACON CHEESEBURGER</p>
                <a className={`flex-none my-auto hover:text-white hover:cursor-pointer rotate-45i ${styles.girar}`}>
                    <div
                        className={`rounded-full border-black px-6 py-1 border ${styles.ovalo} hover:bg-black transition ease-in-out delay-150`}>
                        <p>¡PIDE YA!</p>
                    </div>
                </a>
            </div>

        </div>
        {children}
    </>
}