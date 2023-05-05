import Comida from "../../../public/comida.png"
import Image from "next/image"

export default function Page() {
    return <main className="flex items-center">
        <div className={"flex"}>
            <div className={"flex flex-col"}>
                <div className={"flex-1"}>
                    <div className={"relative -top-20"}>
                        <div className={""}>
                            <div className={"w-[700px] "}>
                                <Image src={Comida} alt={"hamburguesa"} style={{objectFit: "contain"}}
                                       className={"hover:scale-90 transition ease-in duration-200"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-1"}>
                    hellou
                </div>
                <div className={"flex-1"}>
                    houll2
                </div>
            </div>
        </div>

    </main>
}