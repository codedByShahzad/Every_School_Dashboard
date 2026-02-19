import Menu from "@/src/components/Menu"
import Navbar from "@/src/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){

    return <div className="h-screen flex">
        
        <div className=" md:w[8%] lg:w-[14%] xl:w-[1/6] p-4 overflow-scroll">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                <Image src="/images/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block font-bold pt-2">Every School</span>
            </Link>
            <Menu />
        </div>
        <div className=" w-full bg-[#F7F8FA] overflow-scroll">
            <Navbar />
            {children}
        </div>

    </div>

}