import Comida from "../../../public/comida.png"
import Image from "next/image"

export default function Page() {
    return <main className="flex items-center">
        <div className={"flex w-screen"}>
            <div className={"h-[700px] w-full"}>
                <div className={"h-[200px] bg-blue-200"}>
                    <div className={"relative"}>
                        <div className={"absolute w-max"}>
                            <Image src={Comida} alt={"hamburguesa"} style={{objectFit: "contain"}}
                                   className={"hover:scale-90 transition ease-in duration-200"}/>
                        </div>
                    </div>
                </div>
                <div className={"h-[200px] bg-blue-400"}>
                    hellou
                </div>
                <div className={"h-[200px] bg-blue-600"}>
                    houll2
                </div>
            </div>
        </div>

    </main>
}